import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const location = useLocation();
  const history = useNavigate();
  // console.log(history)

  return (
    <div>
      <h1>About us - FAQs</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis illo quibusdam iure totam nesciunt inventore fugit, tempora alias sunt deserunt, fuga odio, natus reprehenderit! Odit fuga ipsam, obcaecati amet ut officia voluptatem animi ea porro itaque esse enim impedit atque commodi odio laborum corrupti iure eius officiis incidunt error praesentium. Cum perferendis aperiam labore cupiditate voluptas non quas fuga? Qui quaerat soluta nesciunt, doloremque illum earum? Molestiae necessitatibus aspernatur omnis laboriosam aliquid culpa numquam, velit labore officia ut vel exercitationem illo porro repellendus corporis eum ipsum et praesentium repellat aliquam. Inventore quibusdam distinctio iure neque velit unde tempora quos ratione perferendis, voluptates blanditiis fugiat iste eius maxime. Fugiat ea quibusdam dolore, vitae aliquid veniam expedita similique modi vel distinctio consequatur repellendus temporibus adipisci ratione quod rerum quo consequuntur doloremque atque accusantium culpa hic quasi! Culpa voluptatem fugiat, repudiandae dolorum asperiores corrupti error neque unde eius illo deleniti sit provident rerum nihil suscipit ducimus repellendus et itaque dolore earum minima? Cupiditate molestiae pariatur voluptatibus est voluptatem excepturi consectetur hic neque quod odio et aliquam at repellat sunt doloribus quos laboriosam, asperiores modi deserunt sequi sint quia corporis autem. Natus harum praesentium perferendis tempore autem blanditiis quis nostrum nesciunt nemo totam consequuntur, voluptatem architecto exercitationem voluptatibus mollitia nisi quam aperiam error excepturi? Mollitia aut repellendus assumenda magnam dolorum. Aliquam ex consequuntur similique vitae quisquam vel esse ut magni nihil laboriosam facilis veniam, voluptatibus error aperiam neque porro quae facere, a corrupti officiis hic. Quibusdam nostrum odio necessitatibus ipsum eligendi, explicabo voluptates, error sit, pariatur est hic rerum nemo? Laboriosam maxime facilis dolore aspernatur nobis quisquam animi tempore, dolor neque aliquid, soluta inventore libero aliquam iste earum voluptas fugit, hic delectus asperiores. Delectus, mollitia! Corporis officia magni nulla quisquam quas nihil reiciendis quo, aperiam pariatur sit, nam ab atque dolor, architecto modi impedit!</p>
      <button onClick={() => history('/')}>Go Home</button>
      <button onClick={() => history(-1)}>Go Back</button>
      {/* //TODO CONDITIONAL RENDER EXTRA BUTTON WHEN FORWARD NAVIGATION ARE AVALIABLE */}
      {/* //? INFO FOUNDED TELLS ABOUT USE useEffect -> TRY THIS WAY */}
    </div>
  );
}

export default AboutPage;
