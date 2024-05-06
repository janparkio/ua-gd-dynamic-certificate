import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * This function returns the certificate's HTML structure that will be saved
 * to the post content and rendered on the front end.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.

 */

export default function save() {
	const blockProps = useBlockProps.save({
		className: "ua-gd-certificate",
	});

	return (
		<div {...blockProps}>
			<div className="certificate-container">
				<div className="certificate-border">
					<header className="certificate-header">
						<p className="certificate-title">Universidad Americana</p>
						<img
							src="https://catalog.americana.edu.py/wp-content/uploads/2024/05/ua-logo-primary.png"
							alt="Universidad Americana Logo"
							style={{ height: "28px" }}
						/>
					</header>
					<div className="certificate-body">
						<div className="certificate-block">
							<div className="certificate-name">
								<span className="earned-text">Otorga a:</span>
								<RichText.Content
									tagName="span"
									className="name-text"
									value="TU NOMBRE"
								/>
							</div>
							<p className="certificate-text">
								El presente título por haber aprobado todas las asignaturas y
								cumplido todos los requisitos de la carrera de Ingeniería
								Comercial en el año {new Date().getFullYear() + 4}
							</p>
							<p className="course-title underline">Made in Americana</p>
						</div>
						<footer className="certificate-footer">
							<span className="credits-text text-xs pt-2">
								Universidad Americana
							</span>
							<span className="credits-text">
								Fecha:{" "}
								{new Date(
									new Date().setFullYear(new Date().getFullYear() + 4),
								).toLocaleDateString()}
							</span>
						</footer>
					</div>
				</div>
			</div>
		</div>
	);
}
