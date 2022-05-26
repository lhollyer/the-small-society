export const post = async(request) => {
    const email = request.body.get("email")
    const query = request.body.get("query")

    const res = 
    await fetch (`https://docs.google.com/forms/d/e/1FAIpQLScIT0GHeP1OOep2p5I1-fcd5_bxE_0nErYCOH-OmivOQ-MaEg/formResponse?usp=pp_url&entry.1302181251=${email}&entry.540283144=${query}&submit=Submit`);

    if (res.status === 200) {
        return {
            status: 200,
            body: {
                message: "success",
            },
        };
    } else {
        return {
            status: 404,
            body: {
                message: "failed",
            },
        };
    }

}



