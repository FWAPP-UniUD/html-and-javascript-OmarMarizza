function DisableFieldSet(checkbox) {
                var toggle = document.getElementById("FieldSet");
                checkbox.checked ? toggle.disabled = false : toggle.disabled = true;
            }