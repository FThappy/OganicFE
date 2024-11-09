import Icons from '@/constants/svgIcon';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import React from 'react';

type Props = {
  href: string;
  title?: string;
};

const LinkViewAll = (props: Props) => {
  const { href, title } = props;
  const t = useTranslations('HomePage');

  return (
    <Link href={href} className='flex items-center gap-2 group' passHref>
      <p className='link-view-all text-green group-hover:text-warning text-[16px] font-medium'>
        {title ? title : t('viewall')}
      </p>
      <Icons.ArrowRight className='[&_path]:stroke-green [&_path]:group-hover:stroke-warning ' />
    </Link>
  );
};

export default LinkViewAll;
