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

document.addEventListener('DOMContentLoaded', function() {
    const certificateBlock = document.querySelector(".ua-gd-certificate");

    // Function to set up event listeners
    const setupEventListeners = (firstNameInput, lastNameInput) => {
        const updateCertificate = () => {
            const fullName = `${firstNameInput.value} ${lastNameInput.value}`;
            certificateBlock.textContent = `Certificado a ${fullName}`;
            console.log("Certificate updated to:", fullName); // Debugging: Log when update occurs
        };

        firstNameInput.addEventListener('input', updateCertificate); // Changed to 'input' for real-time update
        lastNameInput.addEventListener('input', updateCertificate); // Changed to 'input' for real-time update
        console.log("Event listeners attached."); // Debugging: Confirm listeners are attached
    };

    // MutationObserver to ensure elements are available before adding event listeners
    const observer = new MutationObserver((mutations, obs) => {
        const form = document.getElementById('ws-form-2');
        if (form) {
            const firstNameInput = form.querySelector('input[name="field_1"]');
            const lastNameInput = form.querySelector('input[name="field_2"]');

            if (firstNameInput && lastNameInput && certificateBlock) {
                obs.disconnect(); // Stop observing after finding the elements
                setupEventListeners(firstNameInput, lastNameInput);
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

