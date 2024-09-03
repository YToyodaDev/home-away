import { LuUser2 } from 'react-icons/lu';
import { fetchProfileImage } from '@/utils/actions';

const sharedIconClasses = 'w-6 h-6 bg-primary rounded-full';

async function UserIcon() {
  const profileImage = await fetchProfileImage();
  if (profileImage)
    return (
      <img
        src={profileImage}
        className={sharedIconClasses}
        alt='profileImage'
      />
    );
  return <LuUser2 className={`${sharedIconClasses} text-white`} />;
}

export default UserIcon;
