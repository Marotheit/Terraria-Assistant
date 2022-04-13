<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<title>Terraria Assistant</title>
		
		<link id="page-style" rel="stylesheet" href="stylesheets/dark.css" type="text/css">
		<link rel="shortcut icon" href="images/assistant/favicon.ico">
		
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<link href="https://fonts.googleapis.com/css?family=Rubik:400,500&display=swap" rel="stylesheet">
		
		<script src="javascripts/builds-dev.js"></script>
		<script src="javascripts/compatibility.js"></script>
		<script src="javascripts/hotlink-dev.js"></script>
		<script src="javascripts/licensing.js"></script>
		<script src="javascripts/preload-dev.js"></script>
		<script src="javascripts/theming.js"></script>
	</head>
	
	<body id="body" onload="chosenTheme()">
		<div id="navigation-bar">
			<div id="logo">
				<a href="index.html"><img src="images/assistant/assistant.png" alt="Terraria Assistant" height="30" width="28"></a>
				<a href="index.html">Terraria Assistant</a>
			</div>
			<div id="navigation-links">
				<a href="index.html">Home</a>
				<a href="https://forums.terraria.org/index.php?forums/released.125/" target="_blank">Texture Packs</a>
			</div>
			<div id="quick-buttons">
				<input type="image" src="images/assistant/toggle%20theme.png" height="18" width="18" onclick="toggleTheme()">
				<a href="https://github.com/Marotheit/Terraria-Assistant" target="_blank"><img src="images/assistant/github%20logo.png" alt="Terraria Assistant Github" height="18" width="18"></a>
				<input type="image" src="images/assistant/license.png" height="18" width="18" onclick="showLicense()">
				<a href="https://twitter.com/Marotheit" target="_blank"><img src="images/assistant/twitter%20logo.png" alt="Marotheit's Twitter" height="18" width="18"></a>
			</div>
		</div>
		
		<div id="page-container">
		
			<div id="left-flex">
				<div class="selection-field">
					<div class="selection-title">World Options</div>
					<div id="world-options">
						<div id="world-evil-selection">
							<div class="selection-title"><span class="corruption">World</span>&nbsp;<span class="crimson">Evil</span></div>
							<input type="radio" id="evil-corruption" name="evil" value="corruption" autocomplete="off">
							<label for="evil-corruption"><img src="images/world/Corruption%20World.png" alt="Corruption" title="Corruption"></label>
							<input type="radio" id="evil-crimson" name="evil" value="crimson" autocomplete="off">
							<label for="evil-crimson"><img src="images/world/Crimson%20World.png" alt="Crimson" title="Crimson"></label>
						</div>
						<div id="difficulty-selection">
							<div class="selection-title">Difficulty</div>
							<input type="radio" id="difficulty-normal" name="difficulty" value="normal" autocomplete="off">
							<label for="difficulty-normal"><img src="images/world/Normal%20Mode.png" alt="Normal Mode" title="Normal Mode"></label>
							<input type="radio" id="difficulty-expert" name="difficulty" value="expert" autocomplete="off">
							<label for="difficulty-expert"><img src="images/world/Expert%20Mode.png" alt="Expert Mode" title="Expert Mode"></label>
						</div>
					</div>
				</div>
			
				<div id="content-selection">
					<div class="selection-field">
						<div class="selection-title">Classes</div>
						<input type="radio" id="content-crimson-knight" name="content" value="crimson-knight" autocomplete="off">
						<label for="content-crimson-knight"><img src="images/items/Vampire%20Knives.png" alt="Crimson Knight" title="Crimson Knight"></label>
						<input type="radio" id="content-healer" name="content" value="healer" autocomplete="off">
						<label for="content-healer"><img src="images/assistant/Healer.png" alt="Healer" title="Healer"></label>
						<input type="radio" id="content-magic" name="content" value="magic" autocomplete="off">
						<label for="content-magic"><img src="images/items/Demon%20Scythe.png" alt="Magic" title="Magic"></label>
						<input type="radio" id="content-melee" name="content" value="melee" autocomplete="off">
						<label for="content-melee"><img src="images/items/Arkhalis.png" alt="Melee" title="Melee"></label>
						<input type="radio" id="content-ranged" name="content" value="ranged" autocomplete="off">
						<label for="content-ranged"><img src="images/items/Shadowflame%20Bow.png" alt="Ranged" title="Ranged"></label>
						<input type="radio" id="content-summoning" name="content" value="summoning" autocomplete="off">
						<label for="content-summoning"><img src="images/items/Raven%20Staff.png" alt="Summoning" title="Summoning"></label>
						<input type="radio" id="content-throwing" name="content" value="throwing" autocomplete="off">
						<label for="content-throwing"><img src="images/items/Javelin.png" alt="Throwing" title="Throwing"></label>
						<input type="radio" id="content-yo-yo" name="content" value="yo-yo" autocomplete="off">
						<label for="content-yo-yo"><img src="images/items/FormatC.png" alt="Yo-yo" title="Yo-yo"></label>
						<input type="radio" id="content-mixed" name="content" value="mixed" autocomplete="off">
						<label for="content-mixed"><img src="images/items/Hermes%20Boots.png" alt="Mixed" title="Mixed"></label>
						<div class="selection-title">Content</div>
						<input type="radio" id="content-bosses" name="content" value="bosses" autocomplete="off">
						<label for="content-bosses"><img src="images/world/Planteras%20Bulb.png" alt="Bosses" title="Bosses"></label>
						<input type="radio" id="content-fish" name="content" value="fish" autocomplete="off">
						<label for="content-fish"><img src="images/fish/Bass.png" alt="Fish" title="Fish"></label>
						<input type="radio" id="content-potions" name="content" value="potions" autocomplete="off">
						<label for="content-potions"><img src="images/consumables/Calming%20Potion.png" alt="Potions" title="Potions"></label>
						<input type="radio" id="content-vanity" name="content" value="vanity" autocomplete="off">
						<label for="content-vanity"><img src="images/armor%20sets/Archaeologist's%20Set.png" alt="Vanity" title="Vanity"></label>
					</div>
				</div>
					
				<div id="progress-selection">
					<div class="selection-field">
						<div class="selection-title">Upcoming Boss</div>
						<input type="radio" id="progress-pre-bosses" name="progress" value="pre-bosses" autocomplete="off">
						<label for="progress-pre-bosses"><img src="images/events/Pre-Bosses.png" alt="King Slime" title="Pre-Bosses"></label>
						<input type="radio" id="progress-pre-skeletron" name="progress" value="pre-skeletron" autocomplete="off">
						<label for="progress-pre-skeletron"><img src="images/events/Skeletron.png" alt="Skeletron" title="Pre-Skeletron"></label>
						<input type="radio" id="progress-pre-hardmode" name="progress" value="pre-hardmode" autocomplete="off">
						<label for="progress-pre-hardmode"><img src="images/events/Wall%20of%20Flesh.png" alt="Wall of Flesh" title="Pre-Hardmode"></label>
						<input type="radio" id="progress-pre-mechanical" name="progress" value="pre-mechanical" autocomplete="off">
						<label for="progress-pre-mechanical"><img src="images/events/Pre-Mechanical.png" alt="Mechanical Bosses" title="Pre-Mechanical Bosses"></label>
						<input type="radio" id="progress-pre-plantera" name="progress" value="pre-plantera" autocomplete="off">
						<label for="progress-pre-plantera"><img src="images/events/Plantera.png" alt="Plantera" title="Pre-Plantera"></label>
						<input type="radio" id="progress-pre-lunar" name="progress" value="pre-lunar" autocomplete="off">
						<label for="progress-pre-lunar"><img src="images/events/Lunatic%20Cultist.png" alt="Lunatic Cultist" title="Pre-Lunar Events"></label>
						<input type="radio" id="progress-pre-moon-lord" name="progress" value="pre-moon-lord" autocomplete="off">
						<label for="progress-pre-moon-lord"><img src="images/events/Moon%20Lord.png" alt="Moon Lord" title="Pre-Moon Lord"></label>
						<input type="radio" id="progress-endgame" name="progress" value="endgame" autocomplete="off">
						<label for="progress-endgame"><img src="images/assistant/assistant.png" alt="Endgame" title="Endgame"></label>
					</div>
				</div>
				
				<div id="hotlink-container"></div>
			</div>
			
			<div id="right-flex">
				<div id="relevant-information">
				</div>
			</div>
		</div>
		
		<div id="modal">
			<div id="modal-content">
				<div id="modal-header">
					<span id="modal-close-button" onclick="hideLicense()">&times;</span>
					Licensing Information
				</div>
				<div id="modal-body">
					<p>All <a href="https://terraria.org/" target="_blank">Terraria</a> related images and information presented on this website are available from the <a href="https://terraria.gamepedia.com/Terraria_Wiki" target="_blank">Terraria Wiki</a> under the <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/" target="_blank">CC BY-NC-SA 3.0 license</a> unless otherwise noted.</p>
					<p>The <a href="https://icons8.com/icon/16711/creative-commons">Creative Commons icon</a> on the navigation bar is available from <a href="https://icons8.com/" target="_blank">Icons8</a> under the <a href="https://creativecommons.org/licenses/by-nd/3.0/" target="_blank">CC BY-ND 3.0 license</a>.</p>
					<p><a href="index.html" target="_blank">Terraria Assistant</a> is available under the <a href="https://choosealicense.com/licenses/mit/" target="_blank">MIT license</a>. The source is available <a href="https://github.com/Marotheit/Terraria-Assistant">here</a>.</p>
					<p>Game content and materials are trademarks and copyrights of their respective publisher and its licensors.</p>
				</div>
				<div id="modal-footer">
					If you find images or information presented on this website that violates the licenses listed above, please contact the domain administrator <a href="mailto:Terraria.Assistant@gmail.com">here</a>.
				</div>
			</div>
		</div>
		
		<div id="build-hotlink-container"></div>
	</body>

</html>
