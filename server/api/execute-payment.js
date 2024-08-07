import { defineEventHandler, useBody } from 'h3';
import axios from 'axios';

export default defineEventHandler(async (event) => {
    const { sessionId } = await useBody(event);

    try {
        const executePaymentResponse = await axios.post(
            'https://api.myfatoorah.com/v2/ExecutePayment',
            {
                InvoiceValue: 50,
                SessionId: sessionId,
                // Add other required fields here
            },
            {
                headers: {
                    'Authorization': 'Bearer AsTYfKprDDtGNNlhy1T6LV85yZtK4VrGjcKu6KMkOjudglh9fkY4R_xbnFoOweMlmzwk84QaJaxtX2eUXVbgVaBLIUKORnNRKJpBlG-qee9cZQQMesVetN9mMhsS23RjxjBK5__BJxI8QE9Mf3lxFlnkwq3DOaltFJ9GmT4D3NLsa5t0t3w21s9NEaIdxiF7QI_ZgvqW9tbr1j2bUyjgz1JAKgFkOQPFZrOW7Fkqh6aVIfGyVqwd5eI6ysBa3wtrttCy0-VGEUu42QQTKWUJPA3HsgEu-XxDR_4ZTHE4Y1xPjOF9QC4wNvu0CF8UsO9xUlX6Gek-xzyrOp4ssAHYPnim-M3y2jhLfsKylR6DWdhd328l2a9Rt_omMCN-MRHbGdzdvGFKG2X0te6CVPOyWtujH5B9vqHhNrxQ_vtphTs9rjCMMo69xSDcaysCDIQfzJt5Y0Kk1DOlN-UHBSGt5Y56m7VdFD9koXoN5FZqCHhS_0jaq25nvg62pvOFYlvUTHuDnS161jrWPOo8TtWuCtjvL68j9vu6VgktmI2ZQ7w7o8D4n4yvAlk9f2gX7n3eIMAHJB-p1DgmseTEpyYX5pK6EJDcg66th8CSQJcI3LRuxcqqVQZ8tPdgJHXK0rr9fHgGVUMyrb1o0Uhh30C7X3HylLYkKbb6lphTdAvuXFANrMgj',
                    // Replace with your actual token
                    'Content-Type': 'application/json'
                }
            }
        );

        return executePaymentResponse.data;
    } catch (error) {
        return { error: error.message };
    }
});
