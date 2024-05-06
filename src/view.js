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

document.addEventListener("DOMContentLoaded", function () {
	console.log("Document loaded");
	const firstNameInput = document.querySelector('input[name="field_1"]');
	const lastNameInput = document.querySelector('input[name="field_2"]');
	const certificateBlock = document.querySelector(".your-certificate-class");

	console.log("First Name Input:", firstNameInput);
	console.log("Last Name Input:", lastNameInput);
	console.log("Certificate Block:", certificateBlock);

	function updateCertificate() {
		console.log("Updating certificate");
		const firstName = firstNameInput.value;
		const lastName = lastNameInput.value;
		const fullName = `${firstName} ${lastName}`;
		console.log("Full Name:", fullName);

		fetch("/wp-json/ua-gd-dynamic-certificate/v1/certificate-title")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				console.log("Fetched Title:", data.title);
				certificateBlock.innerHTML = `Certificate of ${data.title} awarded to ${fullName}`;
			})
			.catch((error) => {
				console.error("There was a problem with your fetch operation:", error);
			});
	}

	if (firstNameInput && lastNameInput) {
		firstNameInput.addEventListener("input", updateCertificate);
		lastNameInput.addEventListener("input", updateCertificate);
	} else {
		console.error("Input elements not found!");
	}
});
