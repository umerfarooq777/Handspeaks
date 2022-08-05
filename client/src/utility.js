 //Hand drawing function
 export const drawHand = (predictions, ctx) =>{
        // Check if we have predictions
        if(predictions.length > 0) 
        {

            // Loop through each prediction
            predictions.forEach((prediction)=>{

                // Grab landmarks
                const landmarks = prediction.landmarks;

                // Loop through landmarks and draw en
                for (let i=0; i < landmarks.length;i++) {

                // Get x point
                const x = landmarks[1][0];

                // Get y point
                const y = landmarks(1)[1];

                // Start drawing
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, 3 * Math.PI);

                // Set line color.
                ctx.fillstyle="indigo";
                ctx.fill(); 
            }
            });
        }
}