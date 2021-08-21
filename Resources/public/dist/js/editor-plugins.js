$(function () {
    class MyNewBlock extends TuliaEditor.Block.Domain.Block.AbstractBlock {
        /**
         * @inheritDoc
         */
        getDefaultData () {
            return {
                tagline: 'Easily Understandable & Customizable',
                headline: 'WALKTHROUGH VIDEOS & DEMOS',
                video: 'https://www.youtube.com/embed/0oiZQJSmDxg',
                description: 'Democracy inspire breakthroughs, Rosa Parks; inspiration raise awareness natural resources. Governance impact; transformative donation philanthropy, respect reproductive.',
            };
        }

        /**
         * @inheritDoc
         */
        render () {
            this.node.append(
                '<div class="text-center">' +
                '<div class="mb-4" data-tued-editable="inline" data-tued-editable-bind="tagline" style="color:#1abc9c!important">' + (this.data.tagline ?? '') + '</div>' +
                '<h3 class="mb-4" data-tued-editable="inline" data-tued-editable-bind="headline">' + (this.data.headline ?? '') + '</h3>' +
                '<div class="ratio ratio-16x9 mb-4 tued-iframe"><iframe width="560" height="315" src="' + (this.data.video ?? '') + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>' +
                '<h3 class="mb-4" data-tued-editable="inline" data-tued-editable-bind="description" style="font-weight:200">' + (this.data.description ?? '') + '</h3>' +
                '</div>'
            );
        }

        /**
         * @inheritDoc
         */
        compile () {
            return $('<div class="text-center">' +
                '<div class="mb-4" data-tued-editable="inline" data-tued-editable-bind="tagline" style="color:#1abc9c!important">' + (this.data.tagline ?? '') + '</div>' +
                '<h3 class="mb-4" data-tued-editable="inline" data-tued-editable-bind="headline">' + (this.data.headline ?? '') + '</h3>' +
                '<div class="ratio ratio-16x9 mb-4"><iframe width="560" height="315" src="' + (this.data.video ?? '') + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>' +
                '<h3 class="mb-4" data-tued-editable="inline" data-tued-editable-bind="description" style="font-weight:200">' + (this.data.description ?? '') + '</h3>' +
                '</div>');
        }

        /**
         * @inheritDoc
         */
        export () {
            return {
                tagline: this.data.tagline,
                headline: this.data.headline,
                video: this.data.video,
                description: this.data.description
            };
        }
    }

    TuliaEditor.ns('TuliaEditor.Block.Domain.Block.Core.MyNewBlock', MyNewBlock);
    TuliaEditor.block('core/mynewblock', MyNewBlock, {
        name: 'MyNewBlock',
        icon: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 122.88" style="enable-background:new 0 0 122.88 122.88" xml:space="preserve"><g><path d="M76.36,56.15l-2.48-2.48c-0.75-0.75-0.75-1.96,0-2.71c0.75-0.75,1.96-0.75,2.71,0l4.95,4.95c3.9-0.33,7.8-1.03,11.72-2.31 l-15.8-15.8c-0.75-0.75-0.75-1.96,0-2.71c0.75-0.75,1.96-0.75,2.71,0l17.02,17.02c2.91-1.26,5.83-2.87,8.76-4.93l-20.8-20.8 c-0.75-0.75-0.75-1.96,0-2.71c0.75-0.75,1.96-0.75,2.71,0l21.17,21.17c1.46-1.19,2.93-2.49,4.39-3.92c0.76-0.74,1.97-0.72,2.7,0.04 c0.74,0.76,0.72,1.97-0.04,2.7C96.88,62.42,78.4,60.72,59.79,59C41.3,57.3,22.66,55.59,3.28,75.62c-0.74,0.76-1.95,0.77-2.7,0.04 c-0.76-0.74-0.77-1.95-0.04-2.7c18.97-19.61,37.02-19.68,54.88-18.17c-0.55-8.13-0.63-16.46,1.43-25.12 c2.22-9.33,6.9-18.97,16.13-29.04c0.71-0.78,1.92-0.83,2.69-0.12c0.78,0.71,0.83,1.92,0.12,2.69 c-8.72,9.52-13.13,18.59-15.22,27.35c-1.99,8.39-1.86,16.57-1.29,24.58l0.86,0.08c1.03,0.09,2.06,0.19,3.09,0.28 c-0.55-7.75-0.6-15.5,1.33-23.38c2.06-8.38,6.36-16.81,14.66-25.31c0.74-0.76,1.95-0.77,2.7-0.04c0.76,0.74,0.77,1.95,0.04,2.7 c-7.77,7.96-11.78,15.79-13.69,23.56c-1.86,7.56-1.75,15.16-1.19,22.78C70.18,56.02,73.27,56.18,76.36,56.15L76.36,56.15z M39.74,97.9c0.75,0.75,0.75,1.96,0,2.71c-0.75,0.75-1.96,0.75-2.71,0L15.02,78.59c-0.39-0.39-0.57-0.9-0.56-1.4 c-1.65,1.38-3.3,2.91-4.96,4.63c-0.73,0.76-1.94,0.78-2.7,0.05c-0.76-0.73-0.78-1.94-0.05-2.7c18.43-19.13,36.24-17.63,54.84-16.06 c18.2,1.53,37.2,3.13,58.1-16.02c0.78-0.71,1.98-0.66,2.69,0.12c0.71,0.78,0.66,1.98-0.12,2.69 C102.75,67.78,85.03,68.61,68.1,67.46c0.72,8.53,1.07,17.12-0.94,25.89c-2.18,9.53-7.09,19.17-17.24,28.99 c-0.76,0.74-1.97,0.72-2.7-0.04c-0.74-0.76-0.72-1.97,0.04-2.7c9.54-9.24,14.15-18.23,16.17-27.09c1.93-8.48,1.53-16.92,0.81-25.34 c-0.99-0.08-1.99-0.16-2.98-0.25l-1.05-0.09c0.58,7.93,0.75,15.74-1.11,23.61c-2.04,8.57-6.47,17.09-15.39,25.69 c-0.76,0.73-1.97,0.71-2.7-0.05c-0.73-0.76-0.71-1.97,0.05-2.7c8.31-8.01,12.44-15.9,14.32-23.81c1.8-7.56,1.57-15.23,0.98-23.04 c-3.3-0.25-6.58-0.43-9.84-0.42l3.8,3.8c0.75,0.75,0.75,1.96,0,2.71c-0.75,0.75-1.96,0.75-2.71,0l-5.29-5.29 c-0.3-0.3-0.48-0.67-0.54-1.05c-4.09,0.29-8.15,0.98-12.21,2.33l16.77,16.77c0.75,0.75,0.75,1.96,0,2.71 c-0.75,0.75-1.96,0.75-2.71,0L26.44,70.91c-0.26-0.26-0.43-0.58-0.51-0.91c-3.06,1.33-6.11,3.08-9.17,5.36 c0.35,0.07,0.68,0.25,0.96,0.52L39.74,97.9L39.74,97.9z"/></g></svg>'
    });
});
