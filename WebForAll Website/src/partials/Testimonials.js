import React from 'react';

function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Compatible with all Blink based browsers </h2>
            
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5">

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M.93 10.653c.705-5.551 4.49-10.586 11.277-10.653 4.098.078 7.469 1.935 9.473 5.475 1.008 1.848 1.322 3.788 1.389 5.928v2.515h-15.061c.069 6.212 9.139 6 13.046 3.262v5.056c-1.522.915-4.331 1.764-7.225 1.764-7.198 0-10.13-5.411-10.112-9.05-.111-4.469 2.221-7.425 5.844-9.106-.768.954-1.352 2.004-1.658 3.818h8.505s.497-5.082-4.813-5.082c-5.01.177-8.622 3.09-10.665 6.073z"/></svg>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M12.003 0c-6.254 0-11.003 4.547-11.003 11.886 0 6.34 4.399 12.114 11 12.114 6.602 0 11-5.774 11-12.114 0-7.33-4.742-11.886-10.997-11.886zm0 2.12c3.541 0 4.261 5 4.261 9.539 0 4.205-.401 9.834-4.218 9.834s-4.311-5.685-4.311-9.889c.001-4.539.727-9.484 4.268-9.484z"/></svg>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M2.897 4.181c2.43-2.828 5.763-4.181 9.072-4.181 4.288 0 8.535 2.273 10.717 6.554-2.722.001-6.984 0-9.293 0-1.674.001-2.755-.037-3.926.579-1.376.724-2.415 2.067-2.777 3.644l-3.793-6.596zm5.11 7.819c0 2.2 1.789 3.99 3.988 3.99s3.988-1.79 3.988-3.99-1.789-3.991-3.988-3.991-3.988 1.791-3.988 3.991zm5.536 5.223c-2.238.666-4.858-.073-6.293-2.549-1.095-1.891-3.989-6.933-5.305-9.225-1.33 2.04-1.945 4.294-1.945 6.507 0 5.448 3.726 10.65 9.673 11.818l3.87-6.551zm2.158-9.214c1.864 1.734 2.271 4.542 1.007 6.719-.951 1.641-3.988 6.766-5.46 9.248 7.189.443 12.752-5.36 12.752-11.972 0-1.313-.22-2.66-.69-3.995h-7.609z"/></svg>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto col-start-2 col-end-4">
              
            </div>

          </div>

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <img className="relative rounded-full" src={require('../images/testimonial.jpg').default} width="96" height="96" alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ I love this product and would recommend it to anyone. Focus mode has made me 20% more productive. “
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Random User</cite>
                
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;