// images
import InsightDeepTech from '../../assets/images/insights-deeptech.svg';
import InsightIdeal from '../../assets/images/insights-ideias.png';
import Blog1 from '../../assets/images/blogs/blog1.png';
import Blog2 from '../../assets/images/blogs/blog2.png';
import Blog3 from '../../assets/images/blogs/blog3.png';
import Blog4 from '../../assets/images/blogs/blog4.png';

// Styles
import * as S from './styles';
import { useState } from 'react';

export default function Insights() {
  const [lenghtBlog, setLenghtBlog] = useState(4);
  const blogs = [
    {
      type: 'Article',
      title: 'Educational Backbone and a new digital operational model',
      image: Blog1,
    },
    {
      type: 'VISUAL ESSAY',
      title: 'Digital Horizon',
      image: Blog2,
    },
    {
      type: 'Article',
      title: 'Subverting the game logic',
      image: Blog3,
    },
    {
      type: 'Article',
      title: 'Technology, teaching and learning',
      image: Blog4,
    },
    {
      type: 'Article',
      title: 'Technology, teaching and learning',
      image: Blog4,
    },
    {
      type: 'Article',
      title: 'Technology, teaching and learning',
      image: Blog4,
    },
  ];

  function handleLoadMoreBlogs() {
    setLenghtBlog((state) => state + 2);
  }

  return (
    <S.Container>
      <S.Content>
        <S.Heading title="Insights" />

        <S.ContainerCards>
          <S.CardIdeal
            image={InsightIdeal}
            positionImage="absolute"
            title="What is Augmented Agility?"
            type="ARTICLE"
          />
          <S.CardDeepTech
            image={InsightDeepTech}
            backgroundCard="#742698"
            title="Deep Tech and the future of education"
            type="EDITORIAL"
          />
        </S.ContainerCards>

        <S.ContainerBlogs>
          {blogs.map((blog, index) => {
            if (index + 1 <= lenghtBlog) {
              return <S.Blog key={index} data={blog} />;
            } else {
              return false;
            }
          })}
        </S.ContainerBlogs>
        {lenghtBlog < blogs.length && (
          <S.LoadMore onClick={handleLoadMoreBlogs}>
            <span>Load more</span>
          </S.LoadMore>
        )}
      </S.Content>
    </S.Container>
  );
}
