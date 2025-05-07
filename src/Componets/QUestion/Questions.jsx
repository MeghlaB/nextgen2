import React from "react";

function Questions() {
  return (
    <div className="bg-orange-50 py-8">
      <div className="container mx-auto pb-40">
        <h1 className="text-2xl text-center font-bold">
          Frequently Asked Questions
        </h1>
        <div className="pt-8">
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" id="q1" defaultChecked />
            <div className="collapse-title font-semibold" htmlFor="q1">
              What is web design?
            </div>
            <div className="collapse-content text-lg">
              Web design encompasses all the planning and conceptualizing for
              how your website will look to visitors. It’s not only a question
              of aesthetics — while a page must look good, it must also
              communicate and function at optimal levels to guarantee business
              growth. Our designers at Jin ensure high-quality functionality for
              websites across various platforms and devices so that your
              business can create a powerful impact anytime and anywhere..
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" id="q2" />
            <div className="collapse-title font-semibold" htmlFor="q2">
              What is web development?
            </div>
            <div className="collapse-content text-lg">
              Web development is all the work that happens behind the scenes to
              keep your site up and running with efficiency and speed. This can
              include building and maintaining servers, page templates, CMS
              themes and plugins along with optimizing SEO and the overall user
              experience. Our dedicated team of developers at Jin are well-honed
              in the nitty-gritty of the website development process and are
              also on standby to provide you with technical support after your
              site has gone live..
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" id="q3" />
            <div className="collapse-title font-semibold" htmlFor="q3">
              Why choose Jin Design to craft a site for your business or brand?
            </div>
            <div className="collapse-content text-lg">
              We offer competitive and transparent pricing. All our services
              come at affordable costs and you’ll always know exactly what
              you’ll be paying for. You can also look forward to working with a
              lean and efficient team with diverse fields of expertise. Our
              designers will communicate directly with you every step of the way
              to ensure that you’re satisfied with the quality of our work. At
              Jin Design, we take pride in the work we produce, and our goal is
              to provide your business with a truly impactful website.
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" id="q4" />
            <div className="collapse-title font-semibold" htmlFor="q4">
              Top 10 factors to consider when hiring a web design company in
              Singapore?
            </div>
            <div className="collapse-content text-lg">
              When hiring a web designer in Singapore, consider these top 10
              factors:
              <ol className="list-decimal pl-6">
                <li>Portfolio and Past Work: Review their portfolio to assess the quality, style, and versatility of their designs. This gives you insight into their experience and expertise.</li>
                <li>Experience with Local Market: Ensure the designer understands the Singaporean market and its unique digital landscape, including local consumer behavior and trends.</li>
                <li>Technical Skills: Confirm they have the necessary technical skills, such as proficiency in HTML, CSS, JavaScript, and experience with content management systems like WordPress or Joomla.</li>
                <li>SEO and Mobile Responsiveness: The designer should prioritize SEO and mobile responsiveness to ensure your website performs well on search engines and across various devices.</li>
                <li>User Experience (UX) Focus: A good web designer should have a strong focus on user experience, creating intuitive and user-friendly designs.</li>
                <li>Client Testimonials and Reviews: Look for client testimonials and reviews to gauge their reliability, professionalism, and the satisfaction of past clients.</li>
                <li>Communication Skills: Effective communication is key. The designer should be able to clearly understand your requirements and provide regular updates.</li>
                <li>Pricing and Value for Money: Get a clear understanding of their pricing structure. It should be competitive while reflecting the quality and scope of their services.</li>
                <li>After-Sales Support: Inquire about post-launch support and maintenance services. Ongoing support is crucial for dealing with any future issues or updates.</li>
                <li>Timeline and Availability: Discuss timelines and ensure they can deliver within your required timeframe. Check their availability for the duration of the project to avoid any delays.</li>
              </ol>
              Selecting the right web designer in Singapore requires careful consideration of these factors to ensure your website aligns with your business goals and appeals to your target audience.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
