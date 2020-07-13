$(document).ready(() => {
  let $form = $('#personForm');
  let $personDetails = $('.person-details');

  let textCaptureForm = () => {
    let $formFragment = $('<div>');

    return $formFragment
      .append('<label for="skill-rename">Editare</label>')
      .append(
        $('<input>', {
          type: 'text',
          name: 'skill-rename',
        }),
      )
      .append(
        `
          <button type="button" class="skill-edit-save">Salvare</button>
          <button type="button" class="skill-edit-cancel">Anulare</button>
        `,
      );
  };

  $form.on('submit', (event) => {
    let formFields = $(event.currentTarget).serializeArray();
    let $personFragment = $('<div>');

    $personDetails.empty();

    formFields.forEach((field) => {
      let $labelElement = $(`input[name="${field.name}"]`).prev();
      let displayName = $labelElement.text();

      $personFragment.append(
        $('<p>', {
          text: `${displayName} ${field.value}`,
        }),
      );
    });

    $personFragment.appendTo($personDetails);
    // $personDetails.empty().append($personFragment);

    event.currentTarget.reset();
    event.preventDefault();
  });

  $('#addSkill').on('click', (event) => {
    // let skillName = $(event.currentTarget).prev().val();
    let $skillInput = $(event.currentTarget).prev();
    let skillName = $skillInput.val();

    if (skillName.length < 1) {
      return;
    }

    let ulClass = 'skills-ul';
    let $skillsUl = $(`.${ulClass}`);

    if ($skillsUl.length < 1) {
      $skillsUl = $('<ul>', {
        class: ulClass,
      })
        .appendTo('.person-skills')
        .on('click', '.skill-delete, .skill-edit-cancel', (event) => {
          // console.log(event.currentTarget);
          $(event.currentTarget).parent().remove();
        })
        .on('click', '.skill-edit', (event) => {
          $(event.currentTarget).parent().prepend(textCaptureForm());
        })
        .on('click', '.skill-edit-save', (event) => {
          let $skillEditSave = $(event.currentTarget);
          let newSkillName = $skillEditSave.prev().val();

          if (newSkillName.length < 1) {
            return;
          }

          $skillEditSave.parents('li').find('span').text(newSkillName);

          $skillEditSave.parent().remove();
        });
    }

    $skillsUl.append(
      `
        <li>
          <span>${skillName}</span>
          <button class="skill-delete">Sterge</button>
          <button class="skill-edit">Editeaza</button>
        </li>
      `,
    );

    $skillInput.val('');
  });

  $('#has-pets').on('change', (event) => {
    let $checkBox = $(event.currentTarget);
    let isChecked = $checkBox.is(':checked');
    let $petForm = $checkBox.siblings('.pet-form');

    if (isChecked) {
      $petForm.show();
    } else {
      $petForm.hide();
    }
  });

  $('#addPet').on('click', (event) => {
    let $addPetButton = $(event.currentTarget);
    let $petForm = $addPetButton.parent();

    let $fields = $petForm.children('input[name]');

    let formFields = [];
    $fields.each((index, domElement) => {
      let $field = $(domElement);

      formFields.push({
        name: $field.attr('name'),
        value: $field.val(),
      });
    });
    
  });

  $('#addFriend').on('click', (event) => {
    let $addFriendButtom = $(event.currentTarget);
    let $friendForm = $addFriendButtom.parent();
    let $fields = $friendForm.children('input[name]');
    let formFields = [];
    $fields.each((index, domElement) => {
      let $field = $(domElement);

      formFields.push({
        name: $field.attr('name'),
        value: $field.val(),
      });
    });
    if (formFields[0].value === '' || formFields[1].value === '' || formFields[2].value === '') {
      return;
    }

    let $friendList = $('.person-friends');
    let ulClass = 'friend-ul';
    let $friendsUl = $(`.${ulClass}`);

    if ($friendsUl.length < 1) {
      $friendList.append(`<input type="checkbox" name="has-friends-list" id="has-friends-list" checked>
      <label for="has-friends-list">Ascunde lista prietenilor</label>`);
  
      let $friendsUl = $('<ul>', {
        class: ulClass,
      }).appendTo($friendList);

      let $friendLi = $('<li>', {
        class: 'friend-li',
        text: `Prietenul meu  este ${formFields[0].value} ${formFields[1].value} si are ${formFields[2].value} ani. `,
      }).appendTo($friendsUl)
        .append(`<button class="friend-delete">Sterge</button>`)
        .on('click', '.friend-delete', (event) => {
          $(event.currentTarget).parent().remove();
        });

      let $friendsCheck = $('#has-friends-list');
      let $friendsCheckText = $friendsCheck.next('label');
  
      $friendsCheck.on('click', (event) => {
        let $checkBox = $(event.currentTarget);
        let isChecked = $checkBox.is(':checked');
        
        if (isChecked) {
          $friendsUl.show();
          $friendsCheckText.text('Ascunde lista prietenilor');
        } else {
          $friendsUl.hide();
          $friendsCheckText.text('Afiseaza lista prietenilor');
        }
      });
    } else {
      let $friendLi = $('<li>', {
        class: 'friend-li',
        text: `Prietenul meu  este ${formFields[0].value} ${formFields[1].value} si are ${formFields[2].value} ani. `,
      }).appendTo($friendsUl)
        .append(`<button class="friend-delete">Sterge</button>`)
        .on('click', '.friend-delete', (event) => {
          $(event.currentTarget).parent().remove();
        });
    }

    $('.friend-form').find('input[name]').val('');
  });

});

  });
});
