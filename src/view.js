/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('ws-form-2');
    const certificateBlock = document.querySelector(".ua-gd-certificate");

    if (form) {
		console.log("Document loaded");
		const firstNameInput = form.querySelector('input[name="field_1"]');
		const lastNameInput = form.querySelector('input[name="field_2"]');

		console.log("First Name Input:", firstNameInput);
		console.log("Last Name Input:", lastNameInput);
		console.log("Certificate Block:", certificateBlock);
		
        const updateCertificate = () => {
            if (firstNameInput && lastNameInput) {
                const fullName = `${firstNameInput.value} ${lastNameInput.value}`;
                certificateBlock.textContent = `Certificado a ${fullName}`;
            } else {
                console.error('One or more input elements not found!');
            }
        };

        if (firstNameInput && lastNameInput) {
            firstNameInput.addEventListener('change', updateCertificate);
            lastNameInput.addEventListener('change', updateCertificate);
        }
    } else {
        console.error('Form not found!');
    }
});
