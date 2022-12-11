import React from 'react';
import { Link } from 'react-router-dom';
import comparison from '../assets/comparison.svg';
import customer from '../assets/customer.svg';
import survey from '../assets/survey.svg';

export default function Analyse() {
  return (
    <>
      <div className="backButton">
        <Link to="/">
          <button>back</button>
        </Link>
      </div>
      <div className="wrapper">
        <div>
          <h1 className="text-5xl">project document</h1>
          <h1 className="text-3xl">context</h1>
          <h5 className="text-sm">
            Tuinexpress.nl B.V. is a fast-growing online garden centre and
            currently carries more than 10,000 unique home and garden-related
            items in its range. Tuinexpress.nl B.V. was founded in 2010 and has
            since grown into a fully-fledged online garden centre with several
            websites of its own. The warehouse and collection centre in
            Nieuwkuijk, North Brabant, states Tuinexpress.nl B.V. able to
            deliver orders quickly. Tuinexpress.nl B.V. is continuously
            developing in e-commerce. They want to inform the consumer by
            implementing numerous of functionalities. Developing, programming
            and designing these functionalities will be one of the tasks for me
            as an intern. Last year Tuinexpress.nl B.V. has been done scientific
            research into the development of a new website.
          </h5>
          <h1 className="text-3xl">goal of the project</h1>
          <h5 className="text-sm">
            The main problem that needs to be solved is to rebuild the
            tuinexpress.nl website and to provide a better workflow throughout
            the website, make it more user friendly so the customers will enjoy
            the experience of searching and buying gardening products. Based on
            the research conducted a while ago the Tuinexpress team found out
            that their actual website it's very old and outdated (Vosman, 2021)
            and it needs a new interface to keep up with the other competitors
            and gather more users interested in buying gardening products. There
            is a variety of benefits about this project which will improve me as
            an intern. First and foremost, getting a grasp into the front-end
            development skills by rebuilding the old and outdated tuinexpress
            website. Testing right users by using different and the right CMD
            methods, gathering the raw data then analyse it and make the right
            changes to create an optimal experience for the users using the
            tuinexpress website. Improve myself as a team member whilst working
            in a team and provide the best results for them. Last but not least
            the benefit of improving my presentation skills in front of the
            client. The scope of the final product will result into the
            possibility of increasing the number of users using the tuinexpress
            website. Having an appealing, a modern and a up to date website will
            attract more customers. At the same time, if there is a significant
            increase of users using the new tuinexpress website then another
            possibility will be an increase in people buying their products.
            Last but not least, the possibility of providing a better usability
            of the website and also make it more user friendly too.
          </h5>
          <h1 className="text-3xl">research questions</h1>
          <h5 className="text-sm">
            1. How can I provide the most optimal and the right questions for
            the user? <br />
            2. What are the most optimal CMD methods for testing the users?{' '}
            <br />
            3. How can I turn raw data into relevant information? <br />
            4. How can I write clean code? <br />
            5. What is the most optimal and effective way to write code?
          </h5>
          <h1 className="text-3xl">research methods</h1>
          <h5 className="text-sm">
            For my research methods I will use different CMD methods. For my
            first two phases and for the last phase I will use Library methods
            (Literature Study, Expert Interview and Best, good & bad practices),
            but also Showroom methods (Peer Review). Literature Study will be
            used to gather insights mainly from google or any other search
            engines, whereas Expert Interview and Best, good & bad practices
            will be used to ask experts when having questions and incorporate
            what others have already learned, also Peer Review is to ask experts
            and colleagues and gather feedback in order to improve my work. For
            my third phase, I will use Lab methods (Usability Testing and
            Thinking aloud) and Showroom methods (Product Quality Review).
            Usability testing will be conducted with users to detect problems
            users have with the product before going live. Thinking aloud is to
            understand the user behaviour whilst conducting the test, find out
            how they think and why are they taking certain decisions. Last but
            not least, Product Quality Review is to ensure the product is
            perfect before it is released to the client or users.
          </h5>
        </div>
        <div className="text-5xl">research</div>
        <div className="text-3xl">comparison chart</div>
        <img src={comparison} />
        <div className="text-3xl">customer journey</div>
        <img src={customer} />
        <div className="text-3xl">survey results</div>
        <img src={survey} />
      </div>
    </>
  );
}
