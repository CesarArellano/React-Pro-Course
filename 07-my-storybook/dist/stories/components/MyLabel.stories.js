import { MyLabel } from "../../components/MyLabel";
var meta = {
    title: 'UI/My Label',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes: {
        fontColor: { control: 'color' },
    },
};
export default meta;
export var Basic = {
    args: {
        label: 'My Label',
        size: 'normal',
        color: 'primary'
    },
};
export var Secondary = {
    args: {
        label: 'My Label',
        size: 'h2',
        color: 'secondary'
    },
};
export var Tertiary = {
    args: {
        label: 'Tertiary',
        size: 'h2',
        color: 'tertiary'
    },
};
export var AllCaps = {
    args: {
        label: 'AllCaps',
        size: 'h1',
        allCaps: true
    },
};
export var CustomFontColor = {
    args: {
        label: 'CustomFontColor',
        size: "h1",
        fontColor: '#e00051'
    },
};
