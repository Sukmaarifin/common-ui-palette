import React from 'react';
import { checkSVGProp } from './typeSVG';

export default function SalesChannelSVG({
  className = '',
  fill = '#FFFFFF',
  width = '21',
  height = '21',
}: checkSVGProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      fill="none"
      viewBox="0 0 21 21"
    >
      <g fillRule="evenodd" clipPath="url(#clip0)" clipRule="evenodd">
        <path
          fill={fill}
          d="M2.46 10.424c.155 0 .304.062.413.172.11.11.171.259.17.414 0 .155-.061.304-.171.413-.11.11-.259.171-.414.171-.155 0-.304-.062-.413-.172-.11-.11-.171-.259-.171-.414 0-.155.062-.304.172-.413.11-.11.259-.171.414-.171zm12.905-6.01c.04.152.018.31-.062.444-.039.066-.09.124-.152.17-.062.047-.131.08-.206.099-.074.02-.152.024-.228.014-.076-.011-.149-.037-.215-.076-.067-.039-.124-.09-.17-.152-.047-.061-.08-.131-.1-.206-.019-.074-.024-.152-.013-.228.01-.076.036-.15.075-.216s.09-.124.152-.17c.062-.046.132-.08.207-.098.074-.02.152-.024.228-.014.076.01.149.037.215.076.135.079.23.206.27.357h-.001zm-9.65.027c.032-.126.105-.237.207-.317.102-.08.228-.122.358-.122.083 0 .166.016.243.05.076.034.144.083.2.146.056.062.097.136.122.215.025.08.032.164.022.247-.01.083-.039.163-.082.234-.044.071-.103.132-.172.179-.07.046-.148.077-.23.091-.083.014-.167.01-.248-.012v.001c-.075-.019-.145-.052-.206-.098-.062-.046-.113-.104-.152-.17-.04-.067-.065-.14-.076-.216-.01-.076-.006-.154.014-.228zm.987 13.34c-.039.066-.09.124-.152.17-.06.046-.13.08-.205.099-.074.02-.152.025-.228.014-.077-.01-.15-.036-.216-.076-.101-.057-.183-.144-.235-.248-.051-.105-.07-.223-.054-.338.016-.115.067-.223.145-.31.078-.086.18-.147.294-.174.112-.028.23-.023.339.015.109.038.204.108.274.2.07.092.11.203.117.318.007.116-.02.23-.08.33zm7.447-.47c.032-.126.104-.237.207-.317.102-.079.228-.122.358-.121.122 0 .241.037.34.108.1.07.175.17.215.286.04.116.043.24.008.358-.035.117-.105.22-.202.295-.096.075-.214.118-.336.123-.122.004-.243-.03-.345-.096-.101-.067-.18-.165-.224-.279-.044-.114-.05-.239-.02-.357h-.001zm4.39-6.887c.155 0 .304.062.414.171.11.11.17.259.17.414 0 .155-.06.304-.17.414-.11.11-.259.171-.414.171-.155 0-.304-.062-.414-.171-.11-.11-.171-.259-.171-.414 0-.155.062-.304.171-.414.11-.11.259-.171.414-.171zm.64-1.793c-.576-.154-1.189-.093-1.723.172s-.953.716-1.18 1.268h-2.272v-.62c0-.39-.125-.772-.355-1.093l.804-1.364c.34.052.648.029.96-.051.314-.08.608-.222.867-.416.258-.195.475-.439.638-.718.165-.278.273-.586.318-.906.045-.32.027-.645-.055-.958-.08-.313-.222-.607-.416-.865-.195-.258-.438-.475-.717-.638-.278-.165-.586-.273-.906-.318-.32-.046-.645-.027-.958.055-.313.08-.607.221-.866.416-.258.194-.475.438-.638.717-.165.278-.273.586-.318.905-.045.32-.026.646.056.958.08.309.22.598.423.861l-.895 1.52-2.826.002-.882-1.498c.245-.321.407-.698.471-1.098.064-.399.028-.808-.104-1.19-.133-.382-.359-.725-.656-.998-.298-.274-.66-.47-1.051-.569-.313-.081-.639-.1-.959-.055-.32.045-.628.153-.907.317-.278.164-.521.381-.716.64-.194.258-.336.552-.416.865-.082.313-.1.638-.055.958.045.32.153.628.318.906.335.567.869.97 1.504 1.133.312.08.62.104.96.051l.806 1.366c-.22.318-.336.682-.336 1.065v.62H4.723c-.226-.552-.644-1.002-1.178-1.267-.534-.265-1.146-.327-1.722-.173-.437.116-.833.351-1.145.678-.312.327-.528.734-.624 1.176-.077.36-.073.731.012 1.088.085.358.249.692.48.978.23.285.521.516.853.675.331.159.694.241 1.06.242.999 0 1.885-.604 2.264-1.522h2.374v.62c0 .365.107.716.308 1.025l-.864 1.465c-.319-.05-.644-.034-.957.046-.313.08-.607.221-.866.416-.258.194-.475.438-.638.717-.165.278-.273.586-.318.906-.045.32-.026.645.055.958.08.313.221.607.416.865.194.258.438.475.717.638.278.165.586.273.906.318.32.045.645.027.958-.054.313-.08.607-.223.865-.417.257-.195.474-.438.638-.717.165-.278.272-.585.317-.905.045-.32.027-.646-.055-.958-.081-.312-.225-.605-.423-.86l.912-1.547h2.795l.895 1.52c-.198.255-.342.548-.424.86-.082.313-.1.638-.056.958.045.32.153.628.318.906.334.566.869.969 1.505 1.133.53.136 1.09.092 1.593-.126.503-.217.92-.595 1.184-1.074.157-.283.256-.595.29-.918.035-.322.004-.648-.09-.958-.121-.408-.345-.778-.652-1.074-.306-.296-.684-.507-1.096-.614-.313-.079-.638-.094-.957-.044l-.77-1.304c.26-.333.4-.738.4-1.16v-.621h2.274c.183.45.496.835.9 1.106.402.271.877.417 1.363.417.367 0 .73-.083 1.061-.242.331-.158.623-.389.854-.675.23-.286.394-.62.48-.977.084-.357.088-.729.01-1.088-.094-.442-.31-.85-.62-1.177-.312-.328-.708-.563-1.145-.68l-.001.001z"
        />
        <path
          fill={fill}
          d="M12.129 9.807v2.4c0 .21-.17.38-.38.378l-2.4-.016c-.1 0-.196-.041-.266-.112-.07-.072-.11-.168-.109-.268l.016-2.384c0-.1.04-.195.111-.265.07-.07.166-.11.266-.11h2.384c.209 0 .378.17.378.377z"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0H21V21H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
