exports.lambdaHandler = async (event, context) => {
    try {
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Demo Function Called!!!!',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }
}