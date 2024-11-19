const rewrite = async (request, context) => {
    console.log('in the rewrite middleware', request.headers.get('x-nf-request-id'));
    const path = context.geo?.country?.code === 'AU' ? '/edge/australia' : '/edge/not-australia';
    console.log('leaving the rewrite middleware', request.headers.get('x-nf-request-id'))
    return new URL(path, request.url);
};

export const config = {
    path: '/edge'
};

export default rewrite;
