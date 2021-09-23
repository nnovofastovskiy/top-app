/// <reference types="next" />
/// <reference types="next/types/global" />

declare module 'classnames'

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
    export default content;
}
