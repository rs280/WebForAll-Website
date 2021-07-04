import React from 'react';

function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Comes with a Voice Assistant !!</h2>
            
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 24 24"><path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z"/></svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Say "Open Justin Bieber" to search</h4>
              <p className="text-gray-600 text-center">Search up anything just by naming it.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 24 24"><path d="M4.652 0h1.44l.988 3.702.916-3.702h1.454l-1.665 5.505v3.757h-1.431v-3.757l-1.702-5.505zm6.594 2.373c-1.119 0-1.861.74-1.861 1.835v3.349c0 1.204.629 1.831 1.861 1.831 1.022 0 1.826-.683 1.826-1.831v-3.349c0-1.069-.797-1.835-1.826-1.835zm.531 5.127c0 .372-.19.646-.532.646-.351 0-.554-.287-.554-.646v-3.179c0-.374.172-.651.529-.651.39 0 .557.269.557.651v3.179zm4.729-5.07v5.186c-.155.194-.5.512-.747.512-.271 0-.338-.186-.338-.46v-5.238h-1.27v5.71c0 .675.206 1.22.887 1.22.384 0 .918-.2 1.468-.853v.754h1.27v-6.831h-1.27zm2.203 13.858c-.448 0-.541.315-.541.763v.659h1.069v-.66c.001-.44-.092-.762-.528-.762zm-4.703.04c-.084.043-.167.109-.25.198v4.055c.099.106.194.182.287.229.197.1.485.107.619-.067.07-.092.105-.241.105-.449v-3.359c0-.22-.043-.386-.129-.5-.147-.193-.42-.214-.632-.107zm4.827-5.195c-2.604-.177-11.066-.177-13.666 0-2.814.192-3.146 1.892-3.167 6.367.021 4.467.35 6.175 3.167 6.367 2.6.177 11.062.177 13.666 0 2.814-.192 3.146-1.893 3.167-6.367-.021-4.467-.35-6.175-3.167-6.367zm-12.324 10.686h-1.363v-7.54h-1.41v-1.28h4.182v1.28h-1.41v7.54zm4.846 0h-1.21v-.718c-.223.265-.455.467-.696.605-.652.374-1.547.365-1.547-.955v-5.438h1.209v4.988c0 .262.063.438.322.438.236 0 .564-.303.711-.487v-4.939h1.21v6.506zm4.657-1.348c0 .805-.301 1.431-1.106 1.431-.443 0-.812-.162-1.149-.583v.5h-1.221v-8.82h1.221v2.84c.273-.333.644-.608 1.076-.608.886 0 1.18.749 1.18 1.631v3.609zm4.471-1.752h-2.314v1.228c0 .488.042.91.528.91.511 0 .541-.344.541-.91v-.452h1.245v.489c0 1.253-.538 2.013-1.813 2.013-1.155 0-1.746-.842-1.746-2.013v-2.921c0-1.129.746-1.914 1.837-1.914 1.161 0 1.721.738 1.721 1.914v1.656z"/></svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Say "Play Shape of You"</h4>
              <p className="text-gray-600 text-center">Just name your YouTube videos, and they will pop up in the browser.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 24 24"><path d="M11.088 8.063c.062-.243.1-.426.135-.605l-1.1-.214-.109.5c-.371-.055-.767-.061-1.166-.021.009-.268.025-.531.049-.784h1.229v-1.042h-1.082c.054-.265.099-.424.144-.575l-1.074-.322c-.079.263-.144.521-.211.897h-1.225v1.042h1.092c-.029.336-.046.685-.051 1.038-1.207.443-1.719 1.288-1.719 2.053 0 .904.714 1.7 1.842 1.598 1.401-.128 2.337-1.186 2.885-2.487.567.327.805.876.591 1.385-.197.471-.78.919-1.892.896v1.121c1.234.019 2.448-.45 2.925-1.583.464-1.107-.067-2.317-1.263-2.897zm-1.446.766c-.175.387-.405.772-.698 1.075-.045-.323-.076-.676-.092-1.054.267-.035.537-.041.79-.021zm-1.894.362c.03.473.084.909.158 1.298-.998.183-1.038-.801-.158-1.298zm-5.748.161c0 1.873.849 2.943 1.683 3.943.031 1 .085 1.668-.333 3.183 1.748-.558 2.038-.778 3.008-1.374 1 .244 1.474.381 2.611.491-.094.708-.081 1.275.055 2.023-.752-.06-1.528-.178-2.33-.374-1.397.857-4.481 1.725-6.649 2.115.811-1.595 1.708-3.785 1.661-5.312-1.091-1.305-1.706-2.985-1.706-4.695 0-4.826 4.719-8.352 10-8.352 5.237 0 9.977 3.484 9.998 8.318-.644-.175-1.322-.277-2.021-.314-.229-3.34-3.713-6.004-7.977-6.004-4.411 0-8 2.85-8 6.352zm15.657 5.429l.725 2.074h-1.445l.72-2.074zm6.343 1.666c0-3.158-3.089-5.467-6.546-5.467-3.436 0-6.546 2.293-6.546 5.467 0 2.8 2.633 5.442 6.498 5.442.699 0 1.44-.087 2.213-.274.914.561 2.933 1.127 4.352 1.385-.53-1.045-1.117-2.479-1.088-3.479.714-.853 1.117-1.954 1.117-3.074zm-4.851 2.553l-.456-1.27h-2.062l-.451 1.27h-1.18l2.099-5.5h1.101l2.091 5.5h-1.142z"/></svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Say "Translate Bonjour"</h4>
              <p className="text-gray-600 text-center">Translate from any language to English by just speaking.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 24 24"><path d="M12 0c-3.148 0-6 2.553-6 5.702 0 4.682 4.783 5.177 6 12.298 1.217-7.121 6-7.616 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm12 16l-6.707-2.427-5.293 2.427-5.581-2.427-6.419 2.427 4-9 3.96-1.584c.38.516.741 1.08 1.061 1.729l-3.523 1.41-1.725 3.88 2.672-1.01 1.506-2.687-.635 3.044 4.189 1.789.495-2.021.465 2.024 4.15-1.89-.618-3.033 1.572 2.896 2.732.989-1.739-3.978-3.581-1.415c.319-.65.681-1.215 1.062-1.731l4.021 1.588 3.936 9z"/></svg>             
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Say "Directions to San Francisco"</h4>
              <p className="text-gray-600 text-center">Get directions just by naming your destination.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 24 24"><path d="M5 4h-3v-1h3v1zm8 6c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm11-5v17h-24v-17h5.93c.669 0 1.293-.334 1.664-.891l1.406-2.109h8l1.406 2.109c.371.557.995.891 1.664.891h3.93zm-19 4c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm13 4c0-2.761-2.239-5-5-5s-5 2.239-5 5 2.239 5 5 5 5-2.239 5-5z"/></svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Screenshot</h4>
              <p className="text-gray-600 text-center">Forget about googling the screenshot command. Take screenshots withe click of a button.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24"><path d="M20.825 12c-.228.59-3.052 6.998-3.772 8.614-.756 1.695-2.229 3.386-4.951 3.386h-4.729c-2.865 0-4.373-1.7-4.373-4.673v-12.975c0-1.721 2.37-1.633 2.37-.08v5.689c0 .468.858.465.858 0v-9.142c0-1.769 2.65-1.722 2.65 0v8.63c0 .476.797.456.797-.01v-10.128c0-1.722 2.624-1.773 2.624 0l.001 10.245c0 .459.826.469.826 0v-8.604c0-1.629 2.873-1.679 2.873 0v9.75c0 .597.587.692.811.236.212-.433 1.089-2.368 1.1-2.389.883-1.849 3.832-.726 2.915 1.451z"/></svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Speak Sign Language?</h4>
              <p className="text-gray-600 text-center">We got you covered. Just change the font to Sign Language.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
