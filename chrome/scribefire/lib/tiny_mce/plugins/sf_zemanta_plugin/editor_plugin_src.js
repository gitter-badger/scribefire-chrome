/**
 * Zemanta plugin for TinyMCE.
 */

(function() {
	var DOM = tinymce.DOM;

	tinymce.create('tinymce.plugins.Zemanta', {
		init : function(ed, url) {
			// Register commands
			ed.addCommand('SF_Zemanta', function() {
				// Do Zemanta things.
				
				var textContent = $.trim(editor.val());
				
				if (!textContent) {
					alert("You must write something in the editor before adding articles or images from Zemanta.");
				}
				else {
					SF_ZEMANTA.getRelated(null, textContent);
				}
			});

			// Register buttons
			ed.addButton('zemanta', {
				title : scribefire_string("action_zemanta_add"),
				image : url + "/img/zemanta.png",
				cmd : 'SF_Zemanta'
			});
		},

		getInfo : function() {
			return {
				longname : 'ScribeFire Zemanta Plugin',
				author : 'ScribeFire',
				authorurl : 'http://scribefire.com',
				infourl : 'http://scribefire.com',
				version : '1.0'
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('sf_zemanta_plugin', tinymce.plugins.Zemanta);
})();
