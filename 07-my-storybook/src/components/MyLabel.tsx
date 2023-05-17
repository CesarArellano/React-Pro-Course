import './mylabel.css';

interface MyLabelProps {
  /**
   * This is the text that will be displayed
  */
  label?: string;
  /**
   * This parameter defines the size of the label
  */
  size?: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * This parameter sets if the label will be upperCase or not.
  */
  allCaps?: boolean;
  /**
   * This parameter sets the color of the label;
  */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * What font color to use
   */
  fontColor?: string;
}

/**
 * Primary UI component for user interaction
*/
export const MyLabel = ( {
  label = 'No label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor
}: MyLabelProps ) => {
  return (
    <span
      className={ `${ size } text-${ color }` }
      style={{
        color: fontColor
      }}
    >
      { ( allCaps ) ? label.toUpperCase() : label }
    </span>
  )
}
