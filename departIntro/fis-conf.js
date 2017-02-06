// 启用插件
fis.hook('relative');

// 让所有文件，都使用相对路径。
fis.match('**', {
    relative: true
});
//过滤dist文件夹
fis.set('project.ignore', [
    'departIntro/**'
]);
fis.set('project.files', ['*.html', 'map.json']);
fis.match('/img/**', {
    useHash: true
});
// fis.match('/**.html', {
//     useHash: true
// });

// fis.match('./js/**.js', {
//     isMod: true,
//     // release:'$1',
// });

// fis.config.set('settings.spriter.csssprites', {
//     scale: 2,
//     to: '/img'
// })
//
// fis.config.set('settings.spriter.csssprites-group', {
//     //图片缩放比例
//     scale: 2,
//     //1rem像素值
//     rem: 50,
//     //图之间的边距
//     margin: 10,
//     //使用矩阵排列方式，默认为线性`linear`
//     layout: 'matrix',
//     //合并图片存到/img/
//     to: '/img'
// });
// fis.match('::package', {
//     spriter: fis.plugin('csssprites-group')
// });
// // 启用 fis-spriter-csssprites 插件
// fis.match('::package', {
//   spriter: fis.plugin('csssprites')
// })
// 对 CSS 进行图片合并
fis.match('*.{less, css}', {
    // 给匹配到的文件分配属性 `useSprite`
    useSprite: false,
});
//
// fis.match('::packager', {
//     postpackager: fis.plugin('loader', {
//         allInOne: {
//             includeAsyncs: true,
//             ignore: ['/js/lib/sea.js'],
//             useHash: true
//         }
//     })
// });

fis.match('/js/**.js', {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    // optimizer: fis.plugin('uglify-js', {
    //   mangle: {
    //       except: 'exports, module, require, define'
    //   }
    // })
});

// csschuli
fis.match('/css/**.css', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css', {
        keepBreaks: true,
    })
});
//
// //png压缩
// fis.match('/img/**.png', {
//     // fis-optimizer-png-compressor 插件进行压缩，已内置
//     optimizer: fis.plugin('png-compressor', {
//         type: 'pngquant'
//     })
// });

//less文件编译
fis.match('/css/**.less', {
    // fis-parser-less 插件进行解析
    parser: fis.plugin('less'),
    // .less 文件后缀构建后被改成 .css 文件
    rExt: '.css',
    optimizer: fis.plugin('clean-css', {
        keepBreaks: true,
    })
});

fis.match('/css/*.{css, less, scss}', {
    preprocessor: fis.plugin('autoprefixer', {
        "browsers": ["Android >= 2.1", "iOS >= 4", "ie >= 8", "firefox >= 15"],
        "cascade": true
    })
});
//
// fis.hook('cmd', {
//     baseUrl: './js',
//     paths: {
//         tool: 'lib/tools.js',
//         template: 'lib/template.js',
//     }
// });