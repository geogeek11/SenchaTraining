Ext.define('Buttons.view.quote.QuoteController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.quote',

	quotes: {
		'Towels': 'The Hitchhiker’s Guide to the Galaxy has a few things to say on the subject of towels.<br><br>A towel, it says, is about the most massively useful thing an interstellar hitch hiker can have. Partly it has great practical value — you can wrap it around you for warmth as you bound across the cold moons of Jaglan Beta; you can lie on it on the brilliant marble‐sanded beaches of Santraginus V, inhaling the heady sea vapours; you can sleep under it beneath the stars which shine so redly on the desert world of Kakrafoon; use it to sail a mini raft down the slow heavy river Moth; wet it for use in hand‐to‐hand‐combat; wrap it round your head to ward off noxious fumes or to avoid the gaze of the Ravenous Bugblatter Beast of Traal (a mindbogglingly stupid animal, it assumes that if you can\'t see it, it can\'t see you — daft as a bush, but very ravenous); you can wave your towel in emergencies as a distress signal, and of course dry yourself off with it if it still seems to be clean enough.<br><br>More importantly, a towel has immense psychological value. For some reason, if a strag (strag: nonhitchhiker) discovers that a hitchhiker has his towel with him, he will automatically assume that he is also in possession of a toothbrush, washcloth, soap, tin of biscuits, flask, compass, map, ball of string, gnat spray, wet-weather gear, space suit etc., etc. Furthermore, the strag will then happily lend the hitchhiker any of these or a dozen other items that the hitchhiker might have accidentally "lost.". What the strag will think is that any man that can hitch the length and breadth of the Galaxy, rough it, slum it, struggle against terrible odds, win through and still know where his towel is, is clearly a man to be reckoned with.<br><br>Hence a phrase that has passed into hitchhiking slang, as in "Hey, you sass that hoopy Ford Prefect? There\'s a frood who really knows where his towel is." (Sass: know, be aware of, meet, have sex with; hoopy: really together guy; frood: really amazingly together guy.',
		'Babal Fish': '"The Babel fish," said The Hitchhiker\'s Guide to the Galaxy quietly, \"is small, yellow and leech-like, and probably the oddest thing in the Universe. It feeds on brainwave energy received not from its own carrier but from those around it. It absorbs all unconscious mental frequencies from this brainwave energy to nourish itself with. It then excretes into the mind of its carrier a telepathic matrix formed by combining the conscious thought frequencies with nerve signals picked up from the speech centres of the brain which has supplied them. The practical upshot of all this is that if you stick a Babel fish in your ear you can instantly understand anything in any form of language. The speech patterns you actually hear decode the brainwave matrix which has been fed into your mind by your Babel fish.<br><br>\"Now it is such a bizarrely improbable coincidence that anything so mindbogglingly useful could have evolved purely by chance that some thinkers have chosen to see it as the final and clinching proof of the non-existence of God.<br><br>\"The argument goes something like this: \'I refuse to prove that I exist,\' says God, \'for proof denies faith, and without faith I am nothing.\'<br><br>\"\'But,\' says Man, \' the Babel fish is a dead giveaway, isn\'t it? It could not have evolved by chance. It proves you exist, and so therefore, by your own arguments, you don\'t. QED.<br><br>\"\'Oh dear,\' says God, \'I hadn\'t thought of that,\' and promptly vanishes in a puff of logic.<br><br>\"\'Oh, that was easy,\' says Man, and for an encore goes on to prove that black is white and gets himself killed on the next zebra crossing.<br><br>"Most leading theologians claim that this argument is a load of dingo\'s kidneys, but that didn\'t stop Oolon Colluphid making a small fortune when he used it as the central theme of his bestselling book, Well That about Wraps It Up for God.<br><br>"Meanwhile, the poor Babel fish, by effectively removing all barriers to communication between different races and cultures, has caused more and bloodier wars than anything else in the history of creation."',
		'Freedom': 'The renewed shock had nearly made him spill his drink. He drained it quickly before anything serious happened to it. He then had another quick one to follow the first one down and check that it was all right.<br><br>"Freedom," he said aloud.<br><br>Trillian came on to the bridge at that point and said several enthusiastic things on the subject of freedom.<br><br>"I can\'t cope with it,\" Zaphod said darkly, and sent a third drink down to see why the second hadn\'t yet reported on the condition of the first. He looked uncertainly at both of her and preferred the one on the right.<br><br>He poured a drink down his other throat with the plan that it would head the previous one off at the pass, join forces with it, and together they would get the second to pull itself together. Then all three would go off in search of the first, give it a good talking to and maybe a bit of a sing as well.<br><br>He felt uncertain as to whether the fourth drink had understood all that, so he sent down a fifth to explain the plan more fully and a sixth for moral support.<br><br>[The Guide] had some advice to offer on drunkenness.<br><br>\"Go to it,\" it said, \"and good luck.\"<br><br>It was cross-referenced to the entry concerning the size of the Universe and the ways of coping with that.<br><br>There is an art, it says, or rather, a knack to flying. The knack lies in learning how to throw yourself at the ground and miss. … Clearly, it is this second part, the missing, which presents the difficulties.<br><br>Do not listen to what anybody says to you at this point because they are unlikely to say anything helpful.<br><br>[Zaphod] sat up sharply and started to pull clothes on. He decided that there must be someone in the Universe feeling more wretched, miserable and forsaken than himself, and he determined to set out and find him.<br><br>Halfway to the bridge it occurred to him that it might be Marvin, and he returned to bed.'
	},

	onChooseAlign: function(button) {
		this.getViewModel().set('quote.align', button.itemId);
	},
	onChooseQuote: function(menuItem) {
		this.getViewModel().set('quote.text', this.quotes[menuItem.text]);
		this.lookupReference('splitbutton').setText(menuItem.text);
	}

});