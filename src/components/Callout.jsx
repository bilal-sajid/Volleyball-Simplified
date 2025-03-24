import {
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';

const variantStyles = {
  info: {
    bg: 'bg-callout-info-bg',
    border: 'border-callout-info-border',
    text: 'text-callout-info-text',
    iconColor: 'text-callout-info-icon',
    icon: InformationCircleIcon,
  },
  success: {
    bg: 'bg-callout-success-bg',
    border: 'border-callout-success-border',
    text: 'text-callout-success-text',
    iconColor: 'text-callout-success-icon',
    icon: CheckCircleIcon,
  },
  warning: {
    bg: 'bg-callout-warning-bg',
    border: 'border-callout-warning-border',
    text: 'text-callout-warning-text',
    iconColor: 'text-callout-warning-icon',
    icon: ExclamationTriangleIcon,
  },
  tip: {
    bg: 'bg-callout-tip-bg',
    border: 'border-callout-tip-border',
    text: 'text-callout-tip-text',
    iconColor: 'text-callout-tip-icon',
    icon: LightBulbIcon,
  },
};

const Callout = ({ variant = 'info', title, children }) => {
  const styles = variantStyles[variant];
  const Icon = styles.icon;

  return (
    <div className={`flex items-start border-l-4 p-4 my-6 rounded-md ${styles.bg} ${styles.border}`}>
      <div className="mr-3">
        <Icon className={`w-5 h-5 mt-1 ${styles.iconColor}`} />
      </div>
      <div>
        {title && <p className={`font-semibold mb-1 ${styles.text}`}>{title}</p>}
        <p className={`${styles.text}`}>{children}</p>
      </div>
    </div>
  );
};

export default Callout;
