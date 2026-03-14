var p=Object.defineProperty;var i=(o,t)=>p(o,"name",{value:t,configurable:!0});const b={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8,min:9,max:10},r=0,l=1,a=2,d=3,u=4,c=5;var e;const f=(e=class{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<r)}set blend(t){!!(this.data&1<<r)!==t&&(this.data^=1<<r)}get offsets(){return!!(this.data&1<<l)}set offsets(t){!!(this.data&1<<l)!==t&&(this.data^=1<<l)}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<a)}set culling(t){!!(this.data&1<<a)!==t&&(this.data^=1<<a)}get depthTest(){return!!(this.data&1<<d)}set depthTest(t){!!(this.data&1<<d)!==t&&(this.data^=1<<d)}get depthMask(){return!!(this.data&1<<c)}set depthMask(t){!!(this.data&1<<c)!==t&&(this.data^=1<<c)}get clockwiseFrontFace(){return!!(this.data&1<<u)}set clockwiseFrontFace(t){!!(this.data&1<<u)!==t&&(this.data^=1<<u)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=b[t]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new e;return t.depthTest=!1,t.blend=!0,t}},i(e,"_State"),e);f.default2d=f.for2d();let x=f;const h={name:"local-uniform-bit",vertex:{header:`

            struct LocalUniforms {
                uTransformMatrix:mat3x3<f32>,
                uColor:vec4<f32>,
                uRound:f32,
            }

            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `}},y={...h,vertex:{...h.vertex,header:h.vertex.header.replace("group(1)","group(2)")}},F={name:"local-uniform-bit",vertex:{header:`

            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix = uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `}},m=class m{constructor(){this.batcherName="default",this.topology="triangle-list",this.attributeSize=4,this.indexSize=6,this.packAsQuad=!0,this.roundPixels=0,this._attributeStart=0,this._batcher=null,this._batch=null}get blendMode(){return this.renderable.groupBlendMode}get color(){return this.renderable.groupColorAlpha}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.bounds=null}destroy(){}};i(m,"BatchableSprite");let g=m;function k(o,t,s){const n=(o>>24&255)/255;t[s++]=(o&255)/255*n,t[s++]=(o>>8&255)/255*n,t[s++]=(o>>16&255)/255*n,t[s++]=n}i(k,"color32BitToUniform");export{g as B,x as S,h as a,F as b,k as c,y as l};
