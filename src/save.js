import { useBlockProps, RichText } from '@wordpress/block-editor';

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
        className: 'ua-gd-certificate'
    });

    return (
        <div {...blockProps}>
            <div className="certificate-header">
                <h2>Certificado de apreciación</h2>
            </div>
            <div className="certificate-body">
                <p>El presente título otorgado a <span className="certificate-name">[Name]</span> por haber aprobado todas las asignaturas y cumplido todos los requisitos de la carrera.</p>
            </div>
            <div className="certificate-footer">
                <p>Expedido por la Universidad Americana</p>
            </div>
        </div>
    );
}