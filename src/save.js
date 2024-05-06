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
                <h2>Certificate of Appreciation</h2>
            </div>
            <div className="certificate-body">
                <p>This is to certify that <span className="certificate-name">[Name]</span> has been awarded this certificate for outstanding performance and dedication.</p>
            </div>
            <div className="certificate-footer">
                <p>Issued by Universidad Americana</p>
            </div>
        </div>
    );
}