import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
function bars() {
  const calculate = () =>
    Math.min(Math.floor(window.innerWidth / 10.7), 90);
  return {
    count: calculate(),
    calculate,
  };
}
root.render(
  <>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Free Tailwind CSS Status Page Template</title>
        <link rel="stylesheet" href="style.css" />
        <script
          src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.0/dist/alpine.min.js"
          defer
        ></script>
      </head>
      <body>
        <div class="dark:bg-dark">
          <header class="py-8 md:py-12 mb-8">
            <div
              class="container flex flex-col items-center md:flex-row justify-between"
            >
              <div class="logo mb-8 md:mb-0 text-gray-800 dark:text-gray-100">
                <svg
                  width="197"
                  height="53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)" fill="currentColor">
                    <path
                      d="M78.5552 8.04283v3.04247H75.1831V19.1032l1.672.0143 1.665.0215.0421 5.1186c.0351 4.8895.0422 5.1544.1897 5.9705.4637 2.5485 1.2856 3.9158 2.9787 4.9825 2.1286 1.3316 5.2548 1.6823 9.6104 1.0738 1.1311-.1575 2.6696-.4724 2.7399-.5512.0281-.0358-.0562-1.8112-.1827-3.9588-.1264-2.1477-.2318-4.0161-.2318-4.1593l-.007-.2577-.6815.1431c-.4707.1003-.9905.1432-1.6369.1504-.8781.0071-.9765-.0072-1.2996-.1718-.281-.1432-.3864-.2506-.5269-.5369l-.1756-.358V19.139l2.515-.0215 2.508-.0143V11.0853h-5.0582V5.00032H78.5552v3.04251zM126.256 8.04283v3.04247h-3.372V19.1032l1.672.0143 1.665.0215.042 5.1186c.035 4.8895.042 5.1544.19 5.9705.464 2.5485 1.286 3.9158 2.979 4.9825 2.128 1.3316 5.255 1.6823 9.61 1.0738 1.131-.1575 2.67-.4724 2.74-.5512.028-.0358-.056-1.8112-.183-3.9588-.126-2.1477-.231-4.0161-.231-4.1593l-.008-.2577-.681.1431c-.471.1003-.991.1432-1.637.1504-.878.0071-.976-.0072-1.299-.1718-.281-.1432-.387-.2506-.527-.5369l-.176-.358V19.139l2.515-.0215 2.508-.0143V11.0853h-5.058V5.00032H126.256v3.04251zM62.6434 10.5842c-3.0068.2577-5.4235 1.2958-7.0674 3.0568-1.2926 1.3817-1.9319 2.971-2.0092 4.9611-.0562 1.6394.2318 2.9924.8992 4.2022.4005.7302 1.4472 1.8184 2.1497 2.2336.8852.5369 2.9155 1.2743 5.5008 1.9973 2.3183.6586 3.1543 1.1741 2.8662 1.7754-.2458.5226-.9484.6443-2.4588.4224-2.1918-.315-4.6507-1.1669-6.2664-2.1691-.26-.1647-.5059-.3007-.534-.3007-.0491 0-3.6531 6.3141-3.6531 6.3928 0 .0573 1.2084.8734 1.7915 1.217 1.1521.673 2.9505 1.3602 4.4961 1.7253 2.7398.6371 6.14.7087 8.7112.179 2.9436-.6014 5.3532-2.2837 6.5616-4.5817 1.5104-2.8635.9765-6.8152-1.2084-9.0273-1.2294-1.2384-2.9435-2.1047-5.9152-2.9852-2.3324-.6944-2.6485-.8018-2.9997-.9808-.6393-.3293-.7798-.6801-.4356-1.0953.2529-.3078.6182-.3865 1.5385-.3436 1.6158.0788 3.4494.63 5.3743 1.6036.6744.3436 1.2505.63 1.2786.63.0351 0 .7025-1.3674 1.4963-3.0354 1.3348-2.8062 1.4332-3.0353 1.3208-3.1284-.3232-.2434-1.7001-.9879-2.3535-1.2671-1.9881-.8662-4.0535-1.3316-6.5826-1.4819-1.2856-.0787-1.5666-.0787-2.5009 0zM182.914 10.5842c-3.006.2577-5.423 1.2958-7.067 3.0568-1.293 1.3817-1.932 2.971-2.009 4.9611-.056 1.6394.232 2.9924.899 4.2022.401.7302 1.447 1.8184 2.15 2.2336.885.5369 2.915 1.2743 5.501 1.9973 2.318.6586 3.154 1.1741 2.866 1.7754-.246.5226-.949.6443-2.459.4224-2.192-.315-4.651-1.1669-6.266-2.1691-.26-.1647-.506-.3007-.534-.3007-.05 0-3.653 6.3141-3.653 6.3928 0 .0573 1.208.8734 1.791 1.217 1.152.673 2.951 1.3602 4.496 1.7253 2.74.6371 6.14.7087 8.711.179 2.944-.6014 5.354-2.2837 6.562-4.5817 1.51-2.8635.976-6.8152-1.208-9.0273-1.23-1.2384-2.944-2.1047-5.916-2.9852-2.332-.6944-2.648-.8018-2.999-.9808-.64-.3293-.78-.6801-.436-1.0953.253-.3078.618-.3865 1.539-.3436 1.615.0788 3.449.63 5.374 1.6036.674.3436 1.25.63 1.278.63.036 0 .703-1.3674 1.497-3.0354 1.335-2.8062 1.433-3.0353 1.32-3.1284-.323-.2434-1.7-.9879-2.353-1.2671-1.988-.8662-4.053-1.3316-6.583-1.4819-1.285-.0787-1.566-.0787-2.501 0zM106.27 10.6343c-2.41.1575-4.883.6372-7.1942 1.396-1.0327.3365-2.789 1.0166-2.9014 1.1239-.0421.0358 2.487 6.851 2.5642 6.9226.0071.0072.3934-.1718.8571-.4009 3.5193-1.7252 7.6223-2.255 9.6243-1.2384.724.3651 1.159 1.0094 1.159 1.7181v.3794h-.393c-.766 0-5.346.2148-6.14.2864-1.609.1503-3.295.587-4.5524 1.1883-2.9787 1.4103-4.4188 3.9875-4.1027 7.3092.1335 1.3602.4777 2.4913 1.0819 3.5078.3161.5298 1.1451 1.4318 1.7212 1.8685 1.686 1.2743 4.222 1.9615 6.828 1.8541 2.094-.0859 3.534-.6729 5.255-2.1405.745-.6371.668-.7015.801.673l.084.9163h10.243l-.028-7.753c-.021-6.9441-.035-7.8246-.147-8.4976-.443-2.7275-1.307-4.4957-2.986-6.0993-1.89-1.8112-4.405-2.7418-8.086-2.9924-.942-.0644-2.866-.0787-3.688-.0215zm4.25 16.7302v1.532l-.295.2649c-1.096.9521-2.979.9521-3.843 0-.309-.3436-.428-.6801-.428-1.217 0-.9378.498-1.5535 1.475-1.8255.274-.0788 2.058-.2506 2.831-.2792l.26-.0072v1.532zM144.051 19.5829c.021 5.8344.056 8.698.113 9.1132.266 2.0474.653 3.1928 1.524 4.5601 1.412 2.2193 4.215 3.422 7.679 3.2931 1.081-.0358 1.721-.1503 2.641-.4582 1.201-.4008 2.255-.995 3.253-1.8255.393-.3293.505-.3937.512-.2935.008.0716.029.5441.057 1.0595l.042.9307 5.149.0215 5.143.0143V11.0853h-10.742l-.028 7.1374c-.021 7.7029-.014 7.4738-.393 8.2756-.211.4367-.689.8662-1.11.9879-.499.1432-1.279.1074-1.686-.0787-.675-.3007-1.054-.8519-1.244-1.8112-.098-.4725-.112-1.4461-.112-7.5311v-6.9799h-10.826l.028 8.4976z"
                    />
                  </g>
                  <rect
                    y="19"
                    width="10.8571"
                    height="17.6429"
                    rx="4"
                    fill="currentColor"
                  />
                  <rect
                    x="13.5714"
                    width="10.8571"
                    height="36.6429"
                    rx="4"
                    fill="currentColor"
                  />
                  <rect
                    x="27.1429"
                    y="12.2143"
                    width="10.8571"
                    height="24.4286"
                    rx="4"
                    fill="#1EE49D"
                  />
                  <path
                    d="M87.3438 44h.9375c-.043-1.207-1.1563-2.1094-2.7032-2.1094-1.5312 0-2.7343.8906-2.7343 2.2344 0 1.0781.7812 1.7188 2.0312 2.0781l.9844.2813c.8437.2343 1.5937.5312 1.5937 1.3281 0 .875-.8437 1.4531-1.9531 1.4531-.9531 0-1.7969-.4219-1.875-1.3281h-1c.0938 1.3125 1.1563 2.2031 2.875 2.2031 1.8438 0 2.8906-1.0156 2.8906-2.3125 0-1.5-1.4218-1.9843-2.25-2.2031l-.8125-.2188c-.5937-.1562-1.5468-.4687-1.5468-1.3281 0-.7656.7031-1.3281 1.7656-1.3281.9687 0 1.7031.4609 1.7969 1.25zm4.629 0h-1.2813v-1.4375h-.9219V44h-.9062v.7812h.9062v3.75c0 1.0469.8438 1.5469 1.625 1.5469.3438 0 .5625-.0625.6875-.1094l-.1875-.8281c-.0781.0156-.2031.0469-.4062.0469-.4063 0-.7969-.125-.7969-.9063v-3.5h1.2813V44zm2.6573 6.1406c1.0469 0 1.5938-.5625 1.7813-.9531h.0468V50h.9219v-3.9531c0-1.9063-1.4531-2.125-2.2187-2.125-.9063 0-1.9375.3125-2.4063 1.4062l.875.3125c.2031-.4375.6836-.9062 1.5625-.9062.8477 0 1.2656.4492 1.2656 1.2187v.0313c0 .4453-.4531.4062-1.5468.5469-1.1133.1445-2.3282.3906-2.3282 1.7656 0 1.1718.9063 1.8437 2.0469 1.8437zm.1406-.8281c-.7343 0-1.2656-.3281-1.2656-.9688 0-.7031.6406-.9218 1.3594-1.0156.3906-.0469 1.4375-.1562 1.5937-.3437v.8437c0 .75-.5937 1.4844-1.6875 1.4844zM101.177 44h-1.2811v-1.4375h-.9219V44h-.9063v.7812h.9063v3.75c0 1.0469.8437 1.5469 1.625 1.5469.344 0 .562-.0625.687-.1094l-.187-.8281c-.078.0156-.203.0469-.406.0469-.407 0-.7971-.125-.7971-.9063v-3.5h1.2811V44zm4.673 3.5469c0 1.125-.859 1.6406-1.547 1.6406-.765 0-1.312-.5625-1.312-1.4375V44h-.922v3.8125c0 1.5312.812 2.2656 1.937 2.2656.907 0 1.5-.4844 1.782-1.0937h.062V50h.922v-6h-.922v3.5469zm6.365-2.2032c-.289-.8515-.937-1.4218-2.125-1.4218-1.265 0-2.203.7187-2.203 1.7343 0 .8282.492 1.3829 1.594 1.6407l1 .2343c.606.1407.891.4297.891.8438 0 .5156-.547.9375-1.407.9375-.753 0-1.226-.3242-1.39-.9688l-.875.2188c.215 1.0195 1.054 1.5625 2.281 1.5625 1.395 0 2.344-.7617 2.344-1.7969 0-.8359-.524-1.3633-1.594-1.625l-.891-.2187c-.711-.1758-1.031-.4141-1.031-.875 0-.5157.547-.8907 1.281-.8907.805 0 1.137.4454 1.297.8594l.828-.2344zM115.941 42v8h.906v-6.0781h.079l2.5 6.0781h.875l2.5-6.0781h.078V50h.906v-8h-1.156l-2.719 6.6406h-.094L117.097 42h-1.156zm11.604 8.125c1.625 0 2.719-1.2344 2.719-3.0938 0-1.875-1.094-3.1093-2.719-3.1093-1.625 0-2.719 1.2343-2.719 3.1093 0 1.8594 1.094 3.0938 2.719 3.0938zm0-.8281c-1.234 0-1.797-1.0625-1.797-2.2657 0-1.2031.563-2.2812 1.797-2.2812s1.797 1.0781 1.797 2.2812c0 1.2032-.563 2.2657-1.797 2.2657zm4.553-2.9063c0-1.0469.648-1.6406 1.531-1.6406.855 0 1.375.5586 1.375 1.5V50h.922v-3.8125c0-1.5313-.817-2.2656-2.031-2.2656-.907 0-1.469.4062-1.75 1.0156h-.079V44h-.89v6h.922v-3.6094zM137.115 50h.922v-6h-.922v6zm.469-7c.36 0 .656-.2812.656-.625 0-.3437-.296-.625-.656-.625-.359 0-.656.2813-.656.625 0 .3438.297.625.656.625zm4.256 1h-1.281v-1.4375h-.922V44h-.906v.7812h.906v3.75c0 1.0469.844 1.5469 1.625 1.5469.344 0 .563-.0625.688-.1094l-.188-.8281c-.078.0156-.203.0469-.406.0469-.406 0-.797-.125-.797-.9063v-3.5h1.281V44zm3.265 6.125c1.625 0 2.719-1.2344 2.719-3.0938 0-1.875-1.094-3.1093-2.719-3.1093-1.625 0-2.719 1.2343-2.719 3.1093 0 1.8594 1.094 3.0938 2.719 3.0938zm0-.8281c-1.234 0-1.797-1.0625-1.797-2.2657 0-1.2031.563-2.2812 1.797-2.2812s1.797 1.0781 1.797 2.2812c0 1.2032-.563 2.2657-1.797 2.2657zm3.631.7031h.922v-3.7969c0-.8125.64-1.4062 1.515-1.4062.246 0 .5.0469.563.0625v-.9375c-.106-.0078-.348-.0157-.484-.0157-.719 0-1.344.4063-1.563 1h-.062V44h-.891v6zm3.598 0h.922v-6h-.922v6zm.468-7c.36 0 .657-.2812.657-.625 0-.3437-.297-.625-.657-.625-.359 0-.656.2813-.656.625 0 .3438.297.625.656.625zm2.569 3.3906c0-1.0469.648-1.6406 1.531-1.6406.856 0 1.375.5586 1.375 1.5V50h.922v-3.8125c0-1.5313-.816-2.2656-2.031-2.2656-.906 0-1.469.4062-1.75 1.0156h-.078V44h-.891v6h.922v-3.6094zm7.439 5.9844c1.438 0 2.594-.6562 2.594-2.2031V44h-.89v.9531h-.094c-.203-.3125-.578-1.0312-1.75-1.0312-1.516 0-2.563 1.2031-2.563 3.0468 0 1.875 1.094 2.9375 2.547 2.9375 1.172 0 1.547-.6874 1.75-1.0156h.078v1.2188c0 1-.703 1.4531-1.672 1.4531-1.089 0-1.472-.5742-1.718-.9062l-.735.5156c.375.6289 1.114 1.2031 2.453 1.2031zm-.031-3.2969c-1.156 0-1.75-.875-1.75-2.125 0-1.2187.578-2.2031 1.75-2.2031 1.125 0 1.719.9062 1.719 2.2031 0 1.3281-.609 2.125-1.719 2.125z"
                    fill="#a5a5a5"
                  />
                  <defs>
                    <clipPath id="clip0">
                      <path
                        fill="#fff"
                        transform="translate(52 4.85714)"
                        d="M0 0h145v32H0z"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div
                class="links flex space-x-2 items-center leading-none font-medium"
              >
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-dark rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2"
                >
                  <svg
                    class="-ml-1 mr-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 22 22"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M11 15h2v2h-2v-2m0-8h2v6h-2V7m1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Report an Issue
                </button>
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-dark rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2"
                >
                  <svg
                    class="-ml-1 mr-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M10.5002 19.2498c.9625 0 1.75-.7875 1.75-1.75H8.75024c0 .9625.7875 1.75 1.74996 1.75zm5.25-5.25V9.62478c0-2.68625-1.4262-4.93499-3.9375-5.52999v-.595c0-.72625-.5862-1.3125-1.3125-1.3125-.72621 0-1.31246.58625-1.31246 1.3125v.595c-2.5025.595-3.9375 2.83499-3.9375 5.52999v4.37502l-1.75 1.75v.875H17.5002v-.875l-1.75-1.75zm-1.75.875H7.00024V9.62478c0-2.17 1.32125-3.9375 3.49996-3.9375 2.1788 0 3.5 1.7675 3.5 3.9375v5.25002zM6.63274 3.56979L5.38149 2.31854c-2.1 1.60125-3.4825 4.06874-3.605 6.86874h1.75c.06198-1.10966.37347-2.19105.91128-3.16366.53781-.9726 1.28809-1.81136 2.19497-2.45383zM17.474 9.18728h1.75c-.1313-2.8-1.5138-5.26749-3.605-6.86874l-1.2425 1.25125c.903.64563 1.6499 1.48532 2.1859 2.4574.536.97208.8475 2.05188.9116 3.16009z"
                    />
                  </svg>
                  Subscribe
                </button>
              </div>
            </div>
            <div class="container">
              <div
                class="flex items-center p-5 mt-8 md:mt-24 status font-semibold text-dark-green"
              >
                <svg
                  class="mr-4"
                  width="29"
                  height="29"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3733 0c6.8363 0 12.3734 2.87113 12.3734 6.41593 0 3.5448-5.5371 6.41597-12.3734 6.41597C5.53707 12.8319 0 9.96073 0 6.41593 0 2.87113 5.53707 0 12.3733 0zM0 9.62389c0 3.54481 5.53707 6.41591 12.3733 6.41591 6.8363 0 12.3734-2.8711 12.3734-6.41591v4.94031L23.2 14.4358c-4.0059 0-7.424 2.6306-8.7232 6.3197l-2.1035.0963C5.53707 20.8518 0 17.9806 0 14.4358V9.62389zm0 8.01991c0 3.5448 5.53707 6.4159 12.3733 6.4159H13.92c0 1.6842.4176 3.2722 1.16 4.6516l-2.7067.1604C5.53707 28.8717 0 26.0006 0 22.4558v-4.812zM21.6533 29L17.4 24.1881l1.7941-1.8607 2.4592 2.5343 5.5526-5.7422L29 21.3811 21.6533 29z"
                  />
                </svg>
                All Systems Operational
              </div>
            </div>
          </header>

          <main>
            <h2
              class="container text-xs tracking-wide text-gray-500 dark:text-gray-300 uppercase font-bold mb-8"
            >
              Monitors
            </h2>
            <div class="monitors space-y-6">
              <div class="monitor py-8 bg-green-400 bg-opacity-10" x-data="bars()">
                <div class="container flex items-center justify-between mb-3">
                  <h3 class="text-2xl text-gray-800 dark:text-gray-100">Website</h3>
                  <span class="text-green-600 dark:text-green-400 font-semibold">
                    Operational
                  </span>
                </div>
                <div class="container bars">
                  <div class="flex space-x-px">
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                  </div>
                </div>
                <div class="container mt-2">
                  <div class="flex items-center">
                    <span class="pr-2 flex-shrink-0 text-green-500 text-xs font-semibold"> 14 days ago</span>
                    <div class="h-px bg-green-500 w-full"></div>
                    <span class="px-2 flex-shrink-0 text-green-500 text-xs font-semibold">99.999%</span>
                    <div class="h-px bg-green-500 w-full"></div>
                    <span class="pl-2 flex-shrink-0 text-green-500 text-xs font-semibold">Today</span>
                  </div>
                </div>
              </div>
              <div class="monitor py-8 bg-green-400 bg-opacity-10" x-data="bars()">
                <div class="container flex items-center justify-between mb-3">
                  <h3 class="text-2xl text-gray-800 dark:text-gray-100">API</h3>
                  <span class="text-green-600 dark:text-green-400 font-semibold">
                    Operational
                  </span>
                </div>
                <div class="container bars">
                  <div class="flex space-x-px">
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                    <div
                      class="bars bg-green-400 flex-1 h-10 rounded hover:opacity-80 cursor-pointer"
                    ></div>
                  </div>
                </div>
                <div class="container mt-2">
                  <div class="flex items-center">
                    <span class="pr-2 flex-shrink-0 text-green-500 text-xs font-semibold"> 14 days ago</span>
                    <div class="h-px bg-green-500 w-full"></div>
                    <span class="px-2 flex-shrink-0 text-green-500 text-xs font-semibold">99.999%</span>
                    <div class="h-px bg-green-500 w-full"></div>
                    <span class="pl-2 flex-shrink-0 text-green-500 text-xs font-semibold">Today</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="incidents py-16">
              <h2
                class="container text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
              >
                Past Incidents
              </h2>
              <div class="container past-incidents">
              <div class="day mt-12">
                      <h4
                        class="inline-block bg-gray-100 dark:bg-gray-800 rounded-md px-2 font-medium pb-1 mb-2 text-gray-900 dark:text-gray-300"
                      >
                        November 2, 2023
                      </h4>
                      <div class="incidents text-gray-500 dark:text-gray-400">
                        No incidents reported.
                      </div>
                    </div>
                    <div class="day mt-12">
                      <h4
                        class="inline-block bg-gray-100 dark:bg-gray-800 rounded-md px-2 font-medium pb-1 mb-2 text-gray-900 dark:text-gray-300"
                      >
                        November 1, 2023
                      </h4>
                      <div class="incidents text-gray-500 dark:text-gray-400">
                        No incidents reported.
                      </div>
                    </div>
                {(function (rows, i, len) {
                  while (i-- >= len) {
                    rows.push(<div class="day mt-12" x-show="i !== 32">
                      <h4
                        class="inline-block bg-gray-100 dark:bg-gray-800 rounded-md px-2 font-medium pb-1 mb-2 text-gray-900 dark:text-gray-300"
                      >
                        October {i}<span x-text="32 - i"></span>, 2023
                      </h4>
                      <div class="incidents text-gray-500 dark:text-gray-400">
                        No incidents reported.
                      </div>
                    </div>)
                  }
                  return rows;
                })([], 32, 2)}
              </div>
            </div>
          </main>

          <footer class="py-16 text-gray-700 dark:text-gray-100 bg-gray-100 dark:bg-gray-800">
            <div class="container flex justify-between">
              <a href="#" class="flex items-center">
                <svg
                  class="h-4 w-4 mr-1 -mb-px"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  aria-hidden="true"
                >
                  <path d="M224 128a8 8 0 0 1-8 8H59.314l58.343 58.343a8 8 0 0 1-11.314 11.314l-72-72a8 8 0 0 1 0-11.314l72-72a8 8 0 0 1 11.314 11.314L59.314 120H216a8 8 0 0 1 8 8z" fill="currentColor"></path>
                </svg>
                Incident history
              </a>
              <div>
                Powered by
                <span class="font-semibold text-black dark:text-white">Status</span>
              </div>
            </div>
          </footer>
        </div>
        {/* <script>
      function bars() {
        const calculate = () =>
          Math.min(Math.floor(window.innerWidth / 10.7), 90);
        return {
          count: calculate(),
          calculate,
        };
      }
    </script> */}
      </body>
    </html>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
