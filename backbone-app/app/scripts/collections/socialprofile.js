/*global define*/

define([
    'underscore',
    'backbone',
    'models/socialprofile'
], function (_, Backbone, SocialprofileModel) {
    'use strict';

    var SocialprofileCollection = Backbone.Collection.extend({
        model: SocialprofileModel
    });

    return SocialprofileCollection;
});
