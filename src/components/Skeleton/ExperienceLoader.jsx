import ContentLoader from 'react-content-loader';

const ExperienceLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={650}
      height={350}
      backgroundColor='#d1d1d1'
      foregroundColor='#5791b3'
    >
      {/* <rect x="25" y="40" rx="3" ry="3" width="280" height="35" />
			<rect x="25" y="105" rx="3" ry="3" width="600" height="40" />
			<rect x="25" y="160" rx="3" ry="3" width="600" height="40" />
			<rect x="25" y="220" rx="3" ry="3" width="370" height="20" />
			<rect x="25" y="260" rx="3" ry="3" width="130" height="20" />
			<rect x="343" y="260" rx="3" ry="3" width="50" height="20" />

			<rect x="25" y="300" rx="3" ry="3" width="280" height="40" />

			<rect x="343" y="300" rx="3" ry="3" width="280" height="40" />
			<rect x="25" y="378" rx="3" ry="3" width="600" height="100" />
			<rect x="405" y="498" rx="3" ry="3" width="100" height="40" />
			<rect x="523" y="498" rx="3" ry="3" width="100" height="40" /> */}

      <rect x='25' y='0' rx='3' ry='3' width='270' height='30' />

      <rect x='25' y='50' rx='3' ry='3' width='500' height='60' />

      <rect x='25' y='130' rx='3' ry='3' width='150' height='19' />
      <rect x='25' y='170' rx='3' ry='3' width='150' height='16' />

      <rect x='405' y='140' rx='3' ry='3' width='40' height='40' />
      <rect x='523' y='140' rx='3' ry='3' width='40' height='40' />

      <rect x='25' y='210' rx='3' ry='3' width='500' height='45' />

      <rect x='325' y='300' rx='3' ry='3' width='100' height='40' />
      <rect x='480' y='300' rx='3' ry='3' width='100' height='40' />
    </ContentLoader>
  );
};

export default ExperienceLoader;
