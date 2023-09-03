import {
	CLOUDFRONT_KEY_ACCESS_ID,
	CLOUDFRONT_KEY_EXPIRE_TIME_SECONDS,
	CLOUDFRONT_PRIVATE_KEY_PATH,
	CLOUDFRONT_S3_ROOT_PATH,
	ENVIRONMENT
} from '$env/static/private';
import cfsign from 'aws-cloudfront-sign';

/**
 * Used to get a presigned URL for s3 objects through cloudfront.
 * All params rely off environment variables
 * @param subpath
 * @returns
 */
export const generateS3PresignedURL = (subpath: string) => {
	// Dev testing to avoid s3 charges
	if (ENVIRONMENT === 'dev') return `/src/lib/assets/s3${subpath}`;

	const signingParams = {
		keypairId: CLOUDFRONT_KEY_ACCESS_ID,
		privateKeyPath: CLOUDFRONT_PRIVATE_KEY_PATH,
		expireTime: new Date().getTime() + parseInt(CLOUDFRONT_KEY_EXPIRE_TIME_SECONDS) * 1000 //needs milliseconds
	};
	// Generating a signed URL
	const signedUrl = cfsign.getSignedUrl(`${CLOUDFRONT_S3_ROOT_PATH}${subpath}`, signingParams);

	return signedUrl;
};
