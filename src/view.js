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
    const observer = new MutationObserver((mutations, obs) => {
        const form = document.getElementById('ws-form-2');
        const firstNameInput = form.querySelector('input[name="field_1"]');
        const lastNameInput = form.querySelector('input[name="field_2"]');
        const certificateBlock = document.querySelector(".ua-gd-certificate");

        if (firstNameInput && lastNameInput && certificateBlock) {
            obs.disconnect(); // Stop observing after finding the elements
            console.log("Elements found, adding event listeners");

            const updateCertificate = () => {
                const fullName = `${firstNameInput.value} ${lastNameInput.value}`;
                certificateBlock.textContent = `Certificado a ${fullName}`;
            };

            firstNameInput.addEventListener('change', updateCertificate);
            lastNameInput.addEventListener('change', updateCertificate);
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
