'use strict';
(self.webpackChunkmercredi_patrick_ui_garden =
  self.webpackChunkmercredi_patrick_ui_garden || []).push([
  [407],
  {
    './src/components/HeroImage/HeroImage.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => HeroImage_stories,
        });
      __webpack_require__('./node_modules/react/index.js');
      var _templateObject,
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const StyledHero = styled_components_browser_esm.Ay.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              '\n    width: 100%;\n    height: 400px;\n    background-image: url(',
              ');\n    background-size: cover;\n    background-position: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    font-size: 24px;\n    text-shadow: 1px 1px 2px black;\n    opacity: ',
              ';\n    cursor: ',
              ';\n    background-blend-mode: ',
              ';\n',
            ])),
          (props) => props.bgImage,
          (props) => (props.disabled ? 0.5 : 1),
          (props) => (props.disabled ? 'not-allowed' : 'pointer'),
          (props) => (props.disabled ? 'darken' : 'normal')
        ),
        HeroImage = (_ref) => {
          let { bgImage, text, disabled } = _ref;
          return (0, jsx_runtime.jsx)(StyledHero, {
            bgImage,
            disabled,
            'data-testid': 'hero-image',
            children: text,
          });
        },
        HeroImage_HeroImage = HeroImage;
      HeroImage.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'HeroImage',
        props: {
          bgImage: {
            required: !0,
            tsType: { name: 'string' },
            description: '',
          },
          text: { required: !0, tsType: { name: 'string' }, description: '' },
          disabled: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
          },
        },
      };
      const HeroImage_stories = {
          title: 'HeroImage',
          component: HeroImage_HeroImage,
          argTypes: {
            bgImage: { control: 'text' },
            text: { control: 'text' },
            disabled: { control: 'boolean' },
          },
        },
        Default = Object.assign(
          ((args) =>
            (0, jsx_runtime.jsx)(HeroImage_HeroImage, { ...args })).bind({}),
          {
            args: {
              bgImage: 'https://placehold.jp/50/20451c/ffffff/500x500.png',
              text: 'Hero Text Here',
              disabled: !1,
            },
          }
        );
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "Object.assign(Template.bind({}), {\n  args: {\n    bgImage: 'https://placehold.jp/50/20451c/ffffff/500x500.png',\n    text: 'Hero Text Here',\n    disabled: false\n  }\n})",
            ...Default.parameters?.docs?.source,
          },
        },
      };
      const __namedExportsOrder = ['Default'];
    },
  },
]);
