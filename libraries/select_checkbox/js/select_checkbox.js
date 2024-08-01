/* Check all if 'all' is checked */

isAllChecked = 0;
var checkboxes = document.getElementsByName('selectedUsers');

document.getElementById('cb1').onclick = function() {
    for (var checkbox of checkboxes) {
        checkbox.checked = this.checked;
        (this.checked) ? isAllChecked = checkboxes.length - 1: isAllChecked = 0;
    }
}

/* Uncheck 'all' if something is unchecked */
for (i = 1; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', function() {
        document.getElementById('cb1').checked = false;
    });
}

/* check 'all' if all is checked */
for (i = 1; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', function() {
        if (this.checked == true) {
            isAllChecked++;
            if (isAllChecked == (checkboxes.length - 1)) {
                document.getElementById('cb1').checked = true;
            }
        } else {
            if (isAllChecked != 0) {
                isAllChecked--;
            }
        }
    });
}