System.register(["jimu-core","jimu-ui"],(function(t,e){var s={},i={};return{setters:[function(t){s.CONSTANTS=t.CONSTANTS,s.DataSourceManager=t.DataSourceManager,s.ExpressionPartType=t.ExpressionPartType,s.ExpressionResolverComponent=t.ExpressionResolverComponent,s.ExpressionResolverErrorCode=t.ExpressionResolverErrorCode,s.Immutable=t.Immutable,s.LinkType=t.LinkType,s.MultipleDataSourceComponent=t.MultipleDataSourceComponent,s.React=t.React,s.ReactResizeDetector=t.ReactResizeDetector,s.classNames=t.classNames,s.css=t.css,s.getAppStore=t.getAppStore,s.jsx=t.jsx,s.lodash=t.lodash,s.polished=t.polished,s.withRepeatedDataSource=t.withRepeatedDataSource},function(t){i.CropType=t.CropType,i.Icon=t.Icon,i.ImageFillMode=t.ImageFillMode,i.ImageWithParam=t.ImageWithParam,i.Link=t.Link}],execute:function(){t((()=>{var t={11407:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.347 2.146a.485.485 0 010 .708L5.76 8l5.587 5.146a.486.486 0 010 .708.538.538 0 01-.738 0l-5.956-5.5a.485.485 0 010-.708l5.956-5.5a.538.538 0 01.738 0z" fill="#000"></path></svg>'},3273:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.653 13.854a.485.485 0 010-.708L10.24 8 4.653 2.854a.485.485 0 010-.708.538.538 0 01.738 0l5.956 5.5a.485.485 0 010 .708l-5.956 5.5a.538.538 0 01-.738 0z" fill="#000"></path></svg>'},48891:t=>{"use strict";t.exports=s},30726:t=>{"use strict";t.exports=i}},e={};function o(s){var i=e[s];if(void 0!==i)return i.exports;var n=e[s]={exports:{}};return t[s](n,n.exports,o),n.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.p="";var n={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(n),o.d(n,{default:()=>x});var t,e,s=o(48891),i=o(30726);!function(t){t.ByUpload="BYUPLOAD",t.ByStaticUrl="BYSTATICURL",t.ByDynamicUrl="BYDYNAMICURL"}(t||(t={})),function(t){t.Expression="EXPRESSION",t.Attachment="ATTACHMENT",t.Symbol="SYMBOL"}(e||(e={}));class a extends s.React.PureComponent{constructor(t){super(t),this.dataSources=null,this.__unmount=!1,this.isLoading=!1,this.resolveExpressions=t=>{if(t){const e=t;this.isLoading=!0,e&&e.queryAttachments&&e.queryAttachments(this.props.attachmentTypes).then((t=>{this.isLoading&&(this.isLoading=!1,this.setState({attachmentInfos:t}))}),(()=>{this.isLoading=!1}))}else this.isLoading=!1,this.setState({attachmentInfos:null})},this.shallowEquals=(t,e)=>!t&&!e||!(!t||!e)&&Object.keys(t).length===Object.keys(e).length&&!Object.keys(t).some((s=>t[s]!==e[s])),this.state={attachmentInfos:null}}componentDidMount(){this.__unmount=!1,this.resolveExpressions(this.props.record)}componentWillUnmount(){this.__unmount=!0,this.props.unmountAttachmentInfosChange&&this.props.unmountAttachmentInfosChange()}componentDidUpdate(t,e){this.shallowEquals(this.props.record,t.record)||this.resolveExpressions(this.props.record),e.attachmentInfos!==this.state.attachmentInfos&&this.props.onChange&&this.props.onChange(this.state.attachmentInfos)}render(){return null}}class r extends s.React.PureComponent{constructor(t){super(t),this.dataSources=null,this.__unmount=!1,this.isLoading=!1,this.resolveExpressions=t=>{if(t){const e=t;this.isLoading=!0,e&&e.getSymbolPreviewHTML&&e.getSymbolPreviewHTML().then((t=>{this.isLoading&&(this.isLoading=!1,this.setState({symbolElement:t}))}),(()=>{this.isLoading=!1}))}else this.isLoading=!1,this.setState({symbolElement:null})},this.shallowEquals=(t,e)=>!t&&!e||!(!t||!e)&&Object.keys(t).length===Object.keys(e).length&&!Object.keys(t).some((s=>t[s]!==e[s])),this.state={symbolElement:null}}componentDidMount(){this.__unmount=!1,this.resolveExpressions(this.props.record)}componentWillUnmount(){this.__unmount=!0,this.props.unmountSymbolElementChange&&this.props.unmountSymbolElementChange()}componentDidUpdate(t,e){this.shallowEquals(this.props.record,t.record)||this.resolveExpressions(this.props.record),e.symbolElement!==this.state.symbolElement&&this.props.onChange&&this.props.onChange(this.state.symbolElement)}render(){return null}}class l extends s.React.PureComponent{constructor(t){super(t),this.dataSources=null,this.__unmount=!1,this.updateRecord=()=>{const t=this.getSingleRecord();this.props.onRecordChange&&this.props.onRecordChange(t)},this.shallowEquals=(t,e)=>!t&&!e||!(!t||!e)&&Object.keys(t).length===Object.keys(e).length&&!Object.keys(t).some((s=>t[s]!==e[s])),this.getSingleRecord=()=>{var t,e;if(this.props.isSelectedFromRepeatedDataSourceContext){const s=this.props.repeatedDataSource;return Array.isArray(s)?null===(t=s[0])||void 0===t?void 0:t.record:null===(e=s)||void 0===e?void 0:e.record}{if(!this.props.useDataSources||0===this.props.useDataSources.length)return null;const t=this.props.useDataSources[0].dataSourceId;if(t.split("-").reverse()[0]===s.CONSTANTS.SELECTION_DATA_VIEW_ID){const e=s.DataSourceManager.getInstance().getDataSource(t);let i=null==e?void 0:e.getRecords()[0];if(!i){const t=null==e?void 0:e.getMainDataSource().getDataView(s.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION);i=null==t?void 0:t.getRecords()[0]}return i}{const e=s.DataSourceManager.getInstance().getDataSource(t);return null==e?void 0:e.getRecords()[0]}}},this.onDataSourceCreated=t=>{if(this.dataSources=t,t){const e={};Object.keys(t).forEach((s=>{s&&t[s]&&(e[s]=t[s].getInfo())})),this.setState({infos:e})}},this.onDataSourceInfoChange=t=>{this.setState({infos:t})},this.addDataViewForNoSelection=t=>{let e=(0,s.Immutable)([]);return t?(t.forEach((t=>{if(t.mainDataSourceId&&!e.some((e=>e.mainDataSourceId===t.mainDataSourceId))){const i=s.DataSourceManager.getInstance().getDataSource(t.mainDataSourceId),o=i&&i.getDataSourceJson();(null==o?void 0:o.dataViews)&&(null==o?void 0:o.dataViews[s.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION])&&(e=e.concat(t.set("dataSourceId",s.DataSourceManager.getInstance().getDataViewDataSourceId(t.mainDataSourceId,s.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION)).set("dataViewId",s.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION)))}})),e.concat(t)):e},this.getQueries=t=>{const e={};return t?(t.forEach((t=>{e[t.dataSourceId]={}})),e):e},this.state={infos:null}}componentDidMount(){this.__unmount=!1,this.updateRecord()}componentDidUpdate(t,e){this.props.isSelectedFromRepeatedDataSourceContext?this.props.repeatedDataSource===t.repeatedDataSource&&this.props.isSelectedFromRepeatedDataSourceContext===t.isSelectedFromRepeatedDataSourceContext||this.updateRecord():this.props.useDataSources===t.useDataSources&&this.shallowEquals(this.state.infos,e.infos)||this.updateRecord()}render(){const t=this.addDataViewForNoSelection(this.props.useDataSources);return s.React.createElement(s.MultipleDataSourceComponent,{useDataSources:t,onDataSourceCreated:this.onDataSourceCreated,onDataSourceInfoChange:this.onDataSourceInfoChange,queries:this.getQueries(t),widgetId:this.props.widgetId})}}const p=(0,s.withRepeatedDataSource)(l);var c=o(11407),h=o.n(c);const u=t=>{const{className:e}=t,o=function(t,e){var s={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(s[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(s[i[o]]=t[i[o]])}return s}(t,["className"]),n=(0,s.classNames)("jimu-icon-component",e);return s.React.createElement(i.Icon,Object.assign({className:n,icon:h()},o))};var d=o(3273),g=o.n(d);const m=t=>{const{className:e}=t,o=function(t,e){var s={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(s[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(s[i[o]]=t[i[o]])}return s}(t,["className"]),n=(0,s.classNames)("jimu-icon-component",e);return s.React.createElement(i.Icon,Object.assign({className:n,icon:g()},o))};class f extends s.React.PureComponent{constructor(t){super(t),this.backImg=t=>{const e=this.state.currentIndex>0?this.state.currentIndex-1:this.props.sources.length-1;this.setState({currentIndex:e}),null==t||t.preventDefault(),null==t||t.stopPropagation()},this.forwardImg=t=>{const e=this.state.currentIndex<this.props.sources.length-1?this.state.currentIndex+1:0;this.setState({currentIndex:e}),null==t||t.preventDefault(),null==t||t.stopPropagation()},this.state={currentIndex:0}}componentDidUpdate(t,e){t.sources!==this.props.sources&&this.setState({currentIndex:0})}render(){let t={};const e=this.props.toolTipWithAttachmentName?this.props.sources&&this.props.sources[this.state.currentIndex]&&this.props.sources[this.state.currentIndex].name:this.props.toolTip,o=this.props.altTextWithAttachmentName?this.props.sources&&this.props.sources[this.state.currentIndex]&&this.props.sources[this.state.currentIndex].name:this.props.altText;return this.props.imageParam.set?t=this.props.imageParam.set("url",this.props.sources&&this.props.sources[this.state.currentIndex]&&this.props.sources[this.state.currentIndex].url):t.url=this.props.sources&&this.props.sources[this.state.currentIndex]&&this.props.sources[this.state.currentIndex].url,s.React.createElement("div",{className:"w-100 h-100"},this.props.sources&&this.props.sources.length>1&&s.React.createElement("div",{title:e,className:"silder-tool-container w-100 h-100",style:{position:"absolute",zIndex:1}},s.React.createElement("div",{className:"d-flex justify-content-center align-items-center image-gallery-button ml-2",onClick:this.backImg,style:{top:"50%",transform:"translateY(-50%)",position:"absolute",left:0}},s.React.createElement(u,{size:"s"})),s.React.createElement("div",{className:"d-flex justify-content-center align-items-center image-gallery-button mr-2",onClick:this.forwardImg,style:{top:"50%",transform:"translateY(-50%)",position:"absolute",right:0}},s.React.createElement(m,{size:"s"}))),s.React.createElement("div",{className:"image-gallery-content w-100 h-100"},s.React.createElement(i.ImageWithParam,{imageParam:t,useFadein:!0,size:this.props.size,imageFillMode:this.props.imageFillMode,isAutoHeight:this.props.isAutoHeight,toolTip:e,altText:o})))}}const S={};class x extends s.React.PureComponent{constructor(e){var i,o,n,a,r,l,p,c,h,u,d,g,m,f;super(e),this.__unmount=!1,this.attachmentTypes=["image/png","image/jpeg","image/gif","image/bmp","image/svg+xml"],this.isAutoHeight=!1,this.checkIsStaticSrc=e=>e===t.ByUpload||e===t.ByStaticUrl||!e,this.getSrcExpression=()=>this.props.config&&this.props.config.functionConfig&&this.props.config.functionConfig.srcExpression||(0,s.Immutable)({name:"",parts:[{type:s.ExpressionPartType.String,exp:`"${this.props.config&&this.props.config.functionConfig&&this.props.config.functionConfig.imageParam&&this.props.config.functionConfig.imageParam.url}"`}]}),this.getAltTextExpression=()=>this.props.config&&this.props.config.functionConfig&&this.props.config.functionConfig.altTextExpression||(0,s.Immutable)({name:"",parts:[{type:s.ExpressionPartType.String,exp:`"${this.props.config&&this.props.config.functionConfig&&this.props.config.functionConfig.altText}"`}]}),this.getToolTipExpression=()=>this.props.config&&this.props.config.functionConfig&&this.props.config.functionConfig.toolTipExpression||(0,s.Immutable)({name:"",parts:[{type:s.ExpressionPartType.String,exp:`"${this.props.config&&this.props.config.functionConfig&&this.props.config.functionConfig.toolTip}"`}]}),this.getLinkUrlExpression=()=>this.props.config&&this.props.config.functionConfig&&this.props.config.functionConfig.linkParam&&this.props.config.functionConfig.linkParam&&this.props.config.functionConfig.linkParam.expression||null,this.onSrcExpResolveChange=t=>{if(t.isSuccessful)this.setState({src:"null"===t.value?"":t.value});else{let e="";t.value===s.ExpressionResolverErrorCode.Failed&&(e=this.state.srcExpression&&this.state.srcExpression.name),this.setState({src:e})}},this.onToolTipExpResolveChange=t=>{if(t.isSuccessful)this.setState({toolTip:"null"===t.value?"":t.value});else{let e="";t.value===s.ExpressionResolverErrorCode.Failed&&(e=this.state.srcExpression&&this.state.srcExpression.name),this.setState({toolTip:e})}},this.onAltTextExpResolveChange=t=>{if(t.isSuccessful)this.setState({altText:"null"===t.value?"":t.value});else{let e="";t.value===s.ExpressionResolverErrorCode.Failed&&(e=this.state.srcExpression&&this.state.srcExpression.name),this.setState({altText:e})}},this.onLinkUrlExpResolveChange=t=>{if(t.isSuccessful)this.setState({linkUrl:t.value});else{let e="";t.value===s.ExpressionResolverErrorCode.Failed&&(e=this.state.srcExpression&&this.state.srcExpression.name),this.setState({linkUrl:e})}},this.onAttachmentInfosChange=t=>{this.setState({attachmentInfos:t})},this.unmountAttachmentInfosChange=()=>{this.setState({attachmentInfos:[]})},this.onSymbolElementChange=t=>{this.setState({symbolElement:t})},this.unmountSymbolElementChange=()=>{this.setState({symbolElement:null})},this.getRecordsFromRepeatedDataSource=()=>{const t=this.props.useDataSources&&this.props.useDataSources[0]&&this.props.useDataSources[0].dataSourceId;return t&&this.props.repeatedDataSource&&t===this.props.repeatedDataSource.dataSourceId?{[t]:this.props.repeatedDataSource.record}:null},this.onClick=t=>{const e=this.props.config.functionConfig.linkParam;e&&e.value&&e.linkType!==s.LinkType.None&&(t.exbEventType="linkClick")},this.handleImageLoaded=(t,e)=>{this.setState({imageWidth:t,imageHeight:e})},this.getWidgetWidth=()=>this.state.widgetWidth,this.getWidgetHeight=()=>this.state.widgetHeight,this.onResize=(t,e)=>{this.__unmount||(t||e)&&(t===this.state.widgetWidth&&e===this.state.widgetHeight||(S[this.props.id+"-"+this.props.layoutId]={width:t,height:e},this.setState({widgetWidth:t,widgetHeight:e})))},this.onCropWidgetResize=(t,e)=>{this.__unmount||(t||e)&&this.setState({cropWidgetWidth:t,cropWidgetHeight:e})},this.clearCropWidgetSize=()=>{this.setState({cropWidgetWidth:null,cropWidgetHeight:null})},this.handleRecordChange=t=>{this.setState({record:t})};const x=navigator.userAgent.toLowerCase();x.includes("chrom")||x.includes("firefox")||!x.includes("safari")||(this.isAutoHeight=!0),this.debounceOnResize=s.lodash.debounce(((t,e)=>this.onResize(t,e)),200),this.state={record:null,toolTip:(null===(n=null===(o=null===(i=this.props)||void 0===i?void 0:i.config)||void 0===o?void 0:o.functionConfig)||void 0===n?void 0:n.toolTip)||"",altText:(null===(l=null===(r=null===(a=this.props)||void 0===a?void 0:a.config)||void 0===r?void 0:r.functionConfig)||void 0===l?void 0:l.altText)||"",src:(null===(u=null===(h=null===(c=null===(p=this.props)||void 0===p?void 0:p.config)||void 0===c?void 0:c.functionConfig)||void 0===h?void 0:h.imageParam)||void 0===u?void 0:u.url)||"",linkUrl:(null===(f=null===(m=null===(g=null===(d=this.props)||void 0===d?void 0:d.config)||void 0===g?void 0:g.functionConfig)||void 0===m?void 0:m.linkParam)||void 0===f?void 0:f.value)||"",srcExpression:this.props.useDataSourcesEnabled&&this.getSrcExpression(),altTextExpression:this.props.useDataSourcesEnabled&&this.getAltTextExpression(),toolTipExpression:this.props.useDataSourcesEnabled&&this.getToolTipExpression(),linkUrlExpression:this.props.useDataSourcesEnabled&&this.getLinkUrlExpression(),attachmentInfos:[],symbolElement:null,widgetWidth:S[this.props.id+"-"+this.props.layoutId]&&S[this.props.id+"-"+this.props.layoutId].width,widgetHeight:S[this.props.id+"-"+this.props.layoutId]&&S[this.props.id+"-"+this.props.layoutId].height,cropWidgetWidth:null,cropWidgetHeight:null}}getStyle(){const t=this.props.config.functionConfig.symbolScale?this.props.config.functionConfig.symbolScale:1;return s.css`
      .widget-image-container {
        .btn-link {
          padding: 0;
          width: 100%;
          height: 100%;
          outline-offset: -2px;
        }
      }
      .image-symbol {
        svg {
          transform: scale(${t}, ${t})
        }
      }
      .image-gallery-button {
        cursor: pointer;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        background-color: ${s.polished.rgba(this.props.theme.colors.white,.5)};
      }
      .image-gallery-button: hover {
        background-color: ${this.props.theme.colors.white};
      }
    `}componentDidMount(){this.__unmount=!1}componentDidUpdate(s,i){var o,n,a,r,l,p,c,h,u,d,g,m,f,S,x,v,y,C;this.props.useDataSourcesEnabled||this.props.config===s.config&&!s.useDataSourcesEnabled||this.setState({src:(null===(r=null===(a=null===(n=null===(o=this.props)||void 0===o?void 0:o.config)||void 0===n?void 0:n.functionConfig)||void 0===a?void 0:a.imageParam)||void 0===r?void 0:r.url)||"",toolTip:null===(c=null===(p=null===(l=this.props)||void 0===l?void 0:l.config)||void 0===p?void 0:p.functionConfig)||void 0===c?void 0:c.toolTip,altText:null===(d=null===(u=null===(h=this.props)||void 0===h?void 0:h.config)||void 0===u?void 0:u.functionConfig)||void 0===d?void 0:d.altText,linkUrl:null===(S=null===(f=null===(m=null===(g=this.props)||void 0===g?void 0:g.config)||void 0===m?void 0:m.functionConfig)||void 0===f?void 0:f.linkParam)||void 0===S?void 0:S.value}),!this.props.useDataSourcesEnabled||this.props.config===s.config&&s.useDataSourcesEnabled||(this.checkIsStaticSrc(this.props.config.functionConfig.imgSourceType)?this.setState({src:(null===(C=null===(y=null===(v=null===(x=this.props)||void 0===x?void 0:x.config)||void 0===v?void 0:v.functionConfig)||void 0===y?void 0:y.imageParam)||void 0===C?void 0:C.url)||"",toolTipExpression:this.getToolTipExpression(),altTextExpression:this.getAltTextExpression(),linkUrlExpression:this.getLinkUrlExpression()}):this.props.config.functionConfig.imgSourceType!==t.ByDynamicUrl||this.props.config.functionConfig.dynamicUrlType&&this.props.config.functionConfig.dynamicUrlType!==e.Expression?this.setState({src:"",toolTipExpression:this.getToolTipExpression(),altTextExpression:this.getAltTextExpression(),linkUrlExpression:this.getLinkUrlExpression()}):this.setState({srcExpression:this.getSrcExpression(),toolTipExpression:this.getToolTipExpression(),altTextExpression:this.getAltTextExpression(),linkUrlExpression:this.getLinkUrlExpression()}))}componentWillUnmount(){this.__unmount=!0,(0,s.getAppStore)().getState().appConfig.widgets[this.props.id]||delete S[this.props.id+"-"+this.props.layoutId]}render(){const o=this.props.useDataSourcesEnabled,{queryObject:n}=this.props,{toolTip:l,altText:c,src:h}=this.state;let u=null,d=null,g=this.props.config.functionConfig.imageParam?this.props.config.functionConfig.imageParam:(0,s.Immutable)({});g.set?g=g.set("url",h):g.url=h;const m=g&&g.cropParam,S=m&&(m.cropType===i.CropType.Fake||m.cropShape);let x,v;d=(0,s.jsx)("div",{className:"jimu-widget"},(0,s.jsx)("div",{className:"jimu-widget widget-image image-param",style:{minHeight:"16px"}},this.props.config.functionConfig.dynamicUrlType!==e.Attachment&&this.props.config.functionConfig.dynamicUrlType!==e.Symbol&&(0,s.jsx)(i.ImageWithParam,{imageParam:g,toolTip:l,altText:c,onImageLoaded:this.handleImageLoaded,useFadein:!0,size:S?{width:this.state.widgetWidth,height:this.state.widgetHeight}:null,imageFillMode:this.props.config.functionConfig.imageFillMode,isAutoHeight:this.isAutoHeight,imageDisplayQualityMode:this.props.config.functionConfig.imageDisplayQualityMode}),this.props.config.functionConfig.dynamicUrlType===e.Attachment&&(0,s.jsx)("div",{className:"w-100 h-100"},o&&(0,s.jsx)(f,{sources:this.state.attachmentInfos,imageParam:g,imageFillMode:this.props.config.functionConfig.imageFillMode,size:S?{width:this.state.widgetWidth,height:this.state.widgetHeight}:null,isAutoHeight:this.isAutoHeight,toolTip:l,altText:c,altTextWithAttachmentName:this.props.config.functionConfig.altTextWithAttachmentName,toolTipWithAttachmentName:this.props.config.functionConfig.toolTipWithAttachmentName,useFadein:!0}),!o&&(0,s.jsx)(i.ImageWithParam,{imageParam:g,toolTip:l,altText:c,useFadein:!0,size:S?{width:this.state.widgetWidth,height:this.state.widgetHeight}:null,imageFillMode:this.props.config.functionConfig.imageFillMode,isAutoHeight:this.isAutoHeight,imageDisplayQualityMode:this.props.config.functionConfig.imageDisplayQualityMode})),this.props.config.functionConfig.dynamicUrlType===e.Symbol&&(0,s.jsx)("div",{className:"w-100 h-100"},(!this.state.symbolElement||!o)&&(0,s.jsx)(i.ImageWithParam,{imageParam:g,toolTip:l,altText:c,useFadein:!0,size:S?{width:this.state.widgetWidth,height:this.state.widgetHeight}:null,imageFillMode:this.props.config.functionConfig.imageFillMode,isAutoHeight:this.isAutoHeight,imageDisplayQualityMode:this.props.config.functionConfig.imageDisplayQualityMode}),this.state.symbolElement&&o&&(0,s.jsx)("div",{className:"w-100 h-100 image-symbol",title:l,dangerouslySetInnerHTML:{__html:this.state.symbolElement.outerHTML}})),S&&(0,s.jsx)(s.ReactResizeDetector,{handleWidth:!0,handleHeight:!0,onResize:this.debounceOnResize})));const y=this.props.config.functionConfig.linkParam;if(y&&y.linkType&&(x=y.openType,v={linkType:y.linkType},y.linkType===s.LinkType.WebAddress?v.value=this.state.linkUrl:v.value=y.value),u=v&&(null==v?void 0:v.linkType)!==s.LinkType.None?(0,s.jsx)("div",{className:"widget-image-container jimu-widget"},(0,s.jsx)(i.Link,{to:v,target:x,queryObject:n},d)):d,this.props.config.functionConfig.imageFillMode!==i.ImageFillMode.Fit&&this.props.isInlineEditing&&h&&(!this.props.repeatedDataSource||this.props.repeatedDataSource&&0===this.props.repeatedDataSource.recordIndex)){const t=this.props.builderSupportModules.widgetModules.WidgetInBuilder;u=(0,s.jsx)("div",{className:"jimu-widget"},(0,s.jsx)(s.ReactResizeDetector,{handleWidth:!0,handleHeight:!0,onResize:this.onCropWidgetResize}),u,this.state.cropWidgetHeight&&this.state.cropWidgetWidth&&(0,s.jsx)(t,{widgetId:this.props.id,config:this.props.config,onUnmount:()=>{this.clearCropWidgetSize()},widgetWidth:this.state.cropWidgetWidth,widgetHeight:this.state.cropWidgetHeight}))}else u=(0,s.jsx)("div",{className:"jimu-widget",css:this.getStyle(),onClick:t=>{this.onClick(t)},onTouchEnd:t=>{this.onClick(t)}},u,(0,s.jsx)("div",{style:{display:"none"}},o&&this.props.config.functionConfig.imgSourceType===t.ByDynamicUrl&&(!this.props.config.functionConfig.dynamicUrlType||this.props.config.functionConfig.dynamicUrlType===e.Expression)&&(0,s.jsx)("div",null,(0,s.jsx)(s.ExpressionResolverComponent,{useDataSources:this.props.useDataSources,expression:this.getSrcExpression(),onChange:this.onSrcExpResolveChange,widgetId:this.props.id})),o&&(0,s.jsx)("div",null,(0,s.jsx)(s.ExpressionResolverComponent,{useDataSources:this.props.useDataSources,expression:this.getAltTextExpression(),onChange:this.onAltTextExpResolveChange,widgetId:this.props.id}),(0,s.jsx)(s.ExpressionResolverComponent,{useDataSources:this.props.useDataSources,expression:this.getToolTipExpression(),onChange:this.onToolTipExpResolveChange,widgetId:this.props.id}),(0,s.jsx)(s.ExpressionResolverComponent,{useDataSources:this.props.useDataSources,expression:this.state.linkUrlExpression,onChange:this.onLinkUrlExpResolveChange,widgetId:this.props.id})),o&&this.props.config.functionConfig.dynamicUrlType===e.Attachment&&(0,s.jsx)("div",null,(0,s.jsx)(a,{record:this.state.record,unmountAttachmentInfosChange:this.unmountAttachmentInfosChange,onChange:this.onAttachmentInfosChange,attachmentTypes:this.attachmentTypes})),o&&this.props.config.functionConfig.dynamicUrlType===e.Symbol&&(0,s.jsx)("div",null,(0,s.jsx)(r,{record:this.state.record,unmountSymbolElementChange:this.unmountSymbolElementChange,onChange:this.onSymbolElementChange})),o&&(this.props.config.functionConfig.dynamicUrlType===e.Attachment||this.props.config.functionConfig.dynamicUrlType===e.Symbol)&&(0,s.jsx)("div",null,(0,s.jsx)(p,{widgetId:this.props.id,useDataSources:this.props.config.functionConfig.useDataSourceForMainDataAndViewSelector?(0,s.Immutable)([this.props.config.functionConfig.useDataSourceForMainDataAndViewSelector]):(0,s.Immutable)([]),isSelectedFromRepeatedDataSourceContext:this.props.config.functionConfig.isSelectedFromRepeatedDataSourceContext,onRecordChange:this.handleRecordChange}))));return u}}x.mapExtraStateProps=t=>({queryObject:t.queryObject})})(),n})())}}}));