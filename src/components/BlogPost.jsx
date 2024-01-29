export const BlogPost = ({ sections }) => {
  return (
    <div className="blog-post font-['Inter']">
      {sections.map((section, index) => (
        <div key={index} className="section">
          {section.heading && (
            <h2 className="md:text-2xl text-lg font-semibold">
              {section.heading}
            </h2>
          )}
          {section.content && (
            <p className="md:text-lg text-[0.8rem] py-3">{section.content}</p>
          )}
          {section.subsections && (
            <ul>
              {section.subsections.map((subsection, subIndex) => (
                <li key={subIndex}>
                  <h3 className="md:text-xl text-[1rem]  font-semibold py-3">
                    {subsection.title}
                  </h3>
                  <p className="md:text-lg text-[0.8rem] py-3">
                    {subsection.content}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};
