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

/**
 * This script is meant to run on the front-end for a specific block that includes dynamic interaction based on form input and ACF data.
 * It is triggered when the DOM content is fully loaded, ensuring all elements are accessible.
 */
document.addEventListener("DOMContentLoaded", function () {
	const observer = new MutationObserver(function (mutations, obs) {
		const form = document.getElementById("ws-form-2");
		const firstNameInput = document.getElementById("wsf-2-field-1");
		const lastNameInput = document.getElementById("wsf-2-field-2");
		const nameSpan = document.querySelector(".name-text");
		const courseTitle = document.querySelector(".course-title");
		const certificateBlock = document.querySelector(".ua-gd-certificate");

		// Check if all elements are available
		if (
			form &&
			firstNameInput &&
			lastNameInput &&
			nameSpan &&
			courseTitle &&
			certificateBlock
		) {
			console.log("All elements found. Adding event listeners.");
			const updateCertificate = () => {
				const fullName = `${firstNameInput.value} ${lastNameInput.value}`;
				nameSpan.textContent = fullName;
				console.log("Certificate updated to:", fullName);
			};

			firstNameInput.addEventListener("input", updateCertificate);
			lastNameInput.addEventListener("input", updateCertificate);

			// Fetch the ACF field for the course title and update it
			// Ensure the postId is correctly determined and passed to the script
			const postId = document.body.getAttribute("data-post-id"); // Make sure this attribute is set correctly in HTML
			if (postId) {
				fetch(`/wp-json/wp/v2/posts/${postId}?_fields=acf`)
					.then((response) => response.json())
					.then((data) => {
						const courseName = data.acf.field_6633d7d0a91c4;
						if (courseName) {
							courseTitle.textContent = courseName;
						} else {
							courseTitle.textContent = "Made in Americana";
						}
					})
					.catch((error) => console.error("Error fetching ACF field:", error));
			} else {
				console.error("Post ID not found");
			}

			obs.disconnect(); // Stop observing once everything is set up
		} else {
			console.log("Waiting for elements...");
		}
	});

	observer.observe(document.body, {
		childList: true,
		subtree: true,
	});
});