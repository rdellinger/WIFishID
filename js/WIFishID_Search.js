// ********** Setup some global variables; this must happen before the page load function ********************//

// variables for fish filter choices
$mouthFilter = "none";
$spineFilter = "none";
$tailFilter = "none";
$bodyShapeFilter = "none";
$bodyPatternFilter = "none";
$distinctiveFeatureFilter = "none";
$familyFilter = "none";



function pageLoad() {


    //Create the jQuery UI accordion
    $(".accordion").accordion({
        heightStyle: "content",
        active: "false",
        collapsible: true
    });



    // Hide the count of fish that match the filters by default
    $('.jsResultsCount').hide();




    // *********************  Tabs ********************//

    // Reset the lists when switching between tabs
    $('.lnkSearchTab').click(function () {
        $(this).resetList();
    });

    $('.lnkIdentifyByAppearanceTab').click(function () {
        $(this).resetList();
    });










    // *********************  Search by Name ********************//
    $(".txtSearch").keyup(function () {

        var filter = $(this).val(), count = 0;

        $("li").each(function () {
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).addClass("hidden");
            } else {
                $(this).removeClass("hidden");
                count++;
            }
        });

        // Show the count of the results
        $('.jsResultsCount').show();
        $('.resetAllFilters').hide();
        $('.jsCount').text(count);

    });



    // Search box watermark
    var watermark = 'Type the name of a fish';

    //init, set watermark text and class
    $('.txtSearch').val(watermark).addClass('watermark');

    //if blur and no value inside, set watermark text and class again.
    $('.txtSearch').blur(function () {
        if ($(this).val().length == 0) {
            $(this).val(watermark).addClass('watermark');
        }
    });

    //if focus and text is watermrk, set it to empty and remove the watermark class
    $('.txtSearch').focus(function () {
        if ($(this).val() == watermark) {
            $(this).val('').removeClass('watermark');
        }
    });












    // *********************  Mouth filters ********************//

    // Terminal
    $('.mouth-terminal-filter').click(function () {
        $mouthFilter = "terminal";
        $('.lblSnoutShapeTitle').html("<span style='font-size: 24px; color: green;'>Terminal mouth</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="mouth-"]').removeClass("selectedFilter");
        $('.mouth-terminal-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Subterminal
    $('.mouth-subterminal-filter').click(function () {
        $mouthFilter = "subterminal";
        $('.lblSnoutShapeTitle').html("<span style='font-size: 24px; color: green;'>Subterminal mouth</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="mouth-"]').removeClass("selectedFilter");
        $('.mouth-subterminal-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Superior
    $('.mouth-superior-filter').click(function () {
        $mouthFilter = "superior";
        $('.lblSnoutShapeTitle').html("<span style='font-size: 24px; color: green;'>Superior mouth</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="mouth-"]').removeClass("selectedFilter");
        $('.mouth-superior-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Inferior
    $('.mouth-inferior-filter').click(function () {
        $mouthFilter = "inferior";
        $('.lblSnoutShapeTitle').html("<span style='font-size: 24px; color: green;'>Sucker-like mouth</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="mouth-"]').removeClass("selectedFilter");
        $('.mouth-inferior-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Duck-billed
    $('.mouth-duck-billed-filter').click(function () {
        $mouthFilter = "duck-billed";
        $('.lblSnoutShapeTitle').html("<span style='font-size: 24px; color: green;'>Short duck-billed mouth</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="mouth-"]').removeClass("selectedFilter");
        $('.mouth-duck-billed-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Paddle-shaped
    $('.mouth-paddle-shaped-filter').click(function () {
        $mouthFilter = "paddle-shaped";
        $('.lblSnoutShapeTitle').html("<span style='font-size: 24px; color: green;'>Long paddle-shaped mouth</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="mouth-"]').removeClass("selectedFilter");
        $('.mouth-paddle-shaped-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Disk
    $('.mouth-disk-filter').click(function () {
        $mouthFilter = "disk";
        $('.lblSnoutShapeTitle').html("<span style='font-size: 24px; color: green;'>Sucking disk (no jaw)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="mouth-"]').removeClass("selectedFilter");
        $('.mouth-disk-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Clear selection
    $('.resetSnoutShape').click(function () {
        $mouthFilter = "none";
        $('.lblSnoutShapeTitle').text("-- Snout Shape --");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="mouth-"]').removeClass("selectedFilter");
        $(this).updateList();
    });






    // *********************  Spine filters ********************//

    // No spines
    $('.spine-no-spines-filter').click(function () {
        $spineFilter = "no-spines";
        $('.lblSpinesTitle').html("<span style='font-size: 24px; color: green;'>No spines</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="spine-"]').removeClass("selectedFilter");
        $('.spine-no-spines-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // One spine
    $('.spine-one-spine-filter').click(function () {
        $spineFilter = "one-spine";
        $('.lblSpinesTitle').html("<span style='font-size: 24px; color: green;'>One spine</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="spine-"]').removeClass("selectedFilter");
        $('.spine-one-spine-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Membrane
    $('.spine-membrane-filter').click(function () {
        $spineFilter = "membrane";
        $('.lblSpinesTitle').html("<span style='font-size: 24px; color: green;'>More than one spine with membrane</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="spine-"]').removeClass("selectedFilter");
        $('.spine-membrane-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // No membrane
    $('.spine-no-membrane-filter').click(function () {
        $spineFilter = "no-membrane";
        $('.lblSpinesTitle').html("<span style='font-size: 24px; color: green;'>More than one spine with no membrane</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="spine-"]').removeClass("selectedFilter");
        $('.spine-no-membrane-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Clear selection
    $('.resetSpines').click(function () {
        $spineFilter = "none";
        $('.lblSpinesTitle').text("-- Spines --");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="spine-"]').removeClass("selectedFilter");
        $(this).updateList();
    });






    // *********************  Tail filters ********************//

    // Rounded
    $('.tail-rounded-filter').click(function () {
        $tailFilter = "rounded";
        $('.lblTailShapeTitle').html("<span style='font-size: 24px; color: green;'>Rounded tail</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="tail-"]').removeClass("selectedFilter");
        $('.tail-rounded-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Forked
    $('.tail-forked-filter').click(function () {
        $tailFilter = "forked";
        $('.lblTailShapeTitle').html("<span style='font-size: 24px; color: green;'>Forked tail</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="tail-"]').removeClass("selectedFilter");
        $('.tail-forked-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Square
    $('.tail-square-filter').click(function () {
        $tailFilter = "square";
        $('.lblTailShapeTitle').html("<span style='font-size: 24px; color: green;'>Square tail</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="tail-"]').removeClass("selectedFilter");
        $('.tail-square-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Clear selection
    $('.resetTailShape').click(function () {
        $tailFilter = "none";
        $('.lblTailShapeTitle').text("-- Tail Shape --");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="tail-"]').removeClass("selectedFilter");
        $(this).updateList();
    });






    // *********************  Body shape filters ********************//

    // Eel-like
    $('.body-shape-cylindrical-filter').click(function () {
        $bodyShapeFilter = "cylindrical";
        $('.lblBodyShapeTitle').html("<span style='font-size: 24px; color: green;'>Cylindrical</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="body-shape-"]').removeClass("selectedFilter");
        $('.body-shape-cylindrical-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Fusiform
    $('.body-shape-fusiform-filter').click(function () {
        $bodyShapeFilter = "fusiform";
        $('.lblBodyShapeTitle').html("<span style='font-size: 24px; color: green;'>Fusiform</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="body-shape-"]').removeClass("selectedFilter");
        $('.body-shape-fusiform-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Laterally compressed
    $('.body-shape-laterally-compressed-filter').click(function () {
        $bodyShapeFilter = "laterally-compressed";
        $('.lblBodyShapeTitle').html("<span style='font-size: 24px; color: green;'>Laterally-compressed</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="body-shape-"]').removeClass("selectedFilter");
        $('.body-shape-laterally-compressed-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Dorsoventrally flattened
    $('.body-shape-dorsoventrally-flattened-filter').click(function () {
        $bodyShapeFilter = "dorsoventrally-flattened";
        $('.lblBodyShapeTitle').html("<span style='font-size: 24px; color: green;'>Dorsoventrally-flattened</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="body-shape-"]').removeClass("selectedFilter");
        $('.body-shape-dorsoventrally-flattened-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Clear selection
    $('.resetBodyShape').click(function () {
        $bodyShapeFilter = "none";
        $('.lblBodyShapeTitle').text("-- Body Shape --");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="body-shape-"]').removeClass("selectedFilter");
        $(this).updateList();
    });






    // *********************  Body pattern filters ********************//

    // One or More Lateral Stripes
    $('.body-pattern-stripes-filter').click(function () {
        $bodyPatternFilter = "stripes";
        $('.lblBodyPatternTitle').html("<span style='font-size: 24px; color: green;'>One or more stripes</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="body-pattern-"]').removeClass("selectedFilter");
        $('.body-pattern-stripes-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Solid Color
    $('.body-pattern-solid-filter').click(function () {
        $bodyPatternFilter = "solid";
        $('.lblBodyPatternTitle').html("<span style='font-size: 24px; color: green;'>Solid color</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="body-pattern-"]').removeClass("selectedFilter");
        $('.body-pattern-solid-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Mottling and Irregular Blotches
    $('.body-pattern-mottling-filter').click(function () {
        $bodyPatternFilter = "mottling";
        $('.lblBodyPatternTitle').html("<span style='font-size: 24px; color: green;'>Mottling</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="body-pattern-"]').removeClass("selectedFilter");
        $('.body-pattern-mottling-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Spots
    $('.body-pattern-spots-filter').click(function () {
        $bodyPatternFilter = "spots";
        $('.lblBodyPatternTitle').html("<span style='font-size: 24px; color: green;'>Spots</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="body-pattern-"]').removeClass("selectedFilter");
        $('.body-pattern-spots-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Vertical Bands or Bars
    $('.body-pattern-bands-filter').click(function () {
        $bodyPatternFilter = "bands";
        $('.lblBodyPatternTitle').html("<span style='font-size: 24px; color: green;'>Bands or bars</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="body-pattern-"]').removeClass("selectedFilter");
        $('.body-pattern-bands-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Clear selection
    $('.resetBodyPattern').click(function () {
        $bodyPatternFilter = "none";
        $('.lblBodyPatternTitle').text("-- Body Pattern --");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="body-pattern-"]').removeClass("selectedFilter");
        $(this).updateList();
    });








    // *********************  Distinctive feature filters ********************//

    // Sucking Disk (No Jaw)
    $('.distinctive-feature-sucking-disk-filter').click(function () {
        $distinctiveFeatureFilter = "sucking-disk";
        $('.lblDistinctiveFeaturesTitle').html("<span style='font-size: 24px; color: green;'>Sucking disk (no jaw)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="distinctive-"]').removeClass("selectedFilter");
        $('.distinctive-feature-sucking-disk-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Long Paddle-Shaped Snout
    $('.distinctive-feature-paddle-snout-filter').click(function () {
        $distinctiveFeatureFilter = "paddle-snout";
        $('.lblDistinctiveFeaturesTitle').html("<span style='font-size: 24px; color: green;'>Long paddle-shaped mouth</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="distinctive-"]').removeClass("selectedFilter");
        $('.distinctive-feature-paddle-snout-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Long Narrow Snout with Many Teeth
    $('.distinctive-feature-long-snout-filter').click(function () {
        $distinctiveFeatureFilter = "long-snout";
        $('.lblDistinctiveFeaturesTitle').html("<span style='font-size: 24px; color: green;'>Long snout with many teeth</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="distinctive-"]').removeClass("selectedFilter");
        $('.distinctive-feature-long-snout-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Obvious Barbels
    $('.distinctive-feature-barbels-filter').click(function () {
        $distinctiveFeatureFilter = "barbels";
        $('.lblDistinctiveFeaturesTitle').html("<span style='font-size: 24px; color: green;'>Whiskers</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="distinctive-"]').removeClass("selectedFilter");
        $('.distinctive-feature-barbels-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Unconnected Spines on Back
    $('.distinctive-feature-unconnected-spines-filter').click(function () {
        $distinctiveFeatureFilter = "unconnected-spines";
        $('.lblDistinctiveFeaturesTitle').html("<span style='font-size: 24px; color: green;'>More than one spine with no membrane</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="distinctive-"]').removeClass("selectedFilter");
        $('.distinctive-feature-unconnected-spines-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Flexible Snake-like Body
    $('.distinctive-feature-snake-like-filter').click(function () {
        $distinctiveFeatureFilter = "snake-like";
        $('.lblDistinctiveFeaturesTitle').html("<span style='font-size: 24px; color: green;'>Snake-like</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="distinctive-"]').removeClass("selectedFilter");
        $('.distinctive-feature-snake-like-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Clear selection
    $('.resetDistinctiveFeatures').click(function () {
        $distinctiveFeatureFilter = "none";
        $('.lblDistinctiveFeaturesTitle').text("-- Distinctive Features --");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="distinctive-"]').removeClass("selectedFilter");
        $(this).updateList();
    });








    // *********************  Family filters ********************//

    // Bowfins
    $('.family-bowfins-filter').click(function () {
        $familyFilter = "bowfins";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Bowfins (Amiidae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-bowfins-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Bullhead Catfishes
    $('.family-bullheadCatfishes-filter').click(function () {
        $familyFilter = "bullheadCatfishes";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Bullhead Catfishes (Ictaluridae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-bullheadCatfishes-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Burbots
    $('.family-burbots-filter').click(function () {
        $familyFilter = "burbots";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Burbot (Lotidae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-burbots-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Drums
    $('.family-drums-filter').click(function () {
        $familyFilter = "drums";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Drums (Sciaenidae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-drums-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Freshwater Eels
    $('.family-freshwaterEels-filter').click(function () {
        $familyFilter = "freshwaterEels";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Freshwater Eels (Anguillidae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-freshwaterEels-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Gars
    $('.family-gars-filter').click(function () {
        $familyFilter = "gars";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Gars (Lepisosteidae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-gars-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Gobies
    $('.family-gobies-filter').click(function () {
        $familyFilter = "gobies";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Gobies (Gobiidae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-gobies-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Herrings
    $('.family-herrings-filter').click(function () {
        $familyFilter = "herrings";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Herrings (Clupeidae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-herrings-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Killifishes and topminnows
    $('.family-killifishes-filter').click(function () {
        $familyFilter = "killifishes";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Killifishes and topminnows  (Fundulidae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-killifishes-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Lampreys
    $('.family-lampreys-filter').click(function () {
        $familyFilter = "lampreys";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Lampreys (Petromyzontidae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-lampreys-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Livebearers
    $('.family-livebearers-filter').click(function () {
        $familyFilter = "livebearers";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Livebearers (Poeciliidae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-livebearers-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Minnows
    $('.family-minnows-filter').click(function () {
        $familyFilter = "minnows";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Minnows (Cyprinidae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-minnows-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Mooneyes
    $('.family-mooneyes-filter').click(function () {
        $familyFilter = "mooneyes";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Mooneyes (Hiodontidae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-mooneyes-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Mudminnows
    $('.family-mudminnows-filter').click(function () {
        $familyFilter = "mudminnows";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Mudminnows (Umbridae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-mudminnows-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Paddlefishes
    $('.family-paddlefishes-filter').click(function () {
        $familyFilter = "paddlefishes";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Paddlefishes (Polyodontidae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-paddlefishes-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Perches
    $('.family-perches-filter').click(function () {
        $familyFilter = "perches";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Perches (Percidae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-perches-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Pikes
    $('.family-pikes-filter').click(function () {
        $familyFilter = "pikes";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Pikes (Esocidae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-pikes-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Pirate perches
    $('.family-piratePerches-filter').click(function () {
        $familyFilter = "piratePerches";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Pirate perches (Aphredoderidae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-piratePerches-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Sculpins
    $('.family-sculpins-filter').click(function () {
        $familyFilter = "sculpins";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Sculpins (Cottidae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-sculpins-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Silversides
    $('.family-silversides-filter').click(function () {
        $familyFilter = "silversides";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Silversides (Atherinidae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-silversides-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Smelts
    $('.family-smelts-filter').click(function () {
        $familyFilter = "smelts";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Smelts (Osmeridae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-smelts-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Sticklebacks
    $('.family-sticklebacks-filter').click(function () {
        $familyFilter = "sticklebacks";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Sticklebacks (Gasterosteidae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-sticklebacks-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Sturgeons
    $('.family-sturgeons-filter').click(function () {
        $familyFilter = "sturgeons";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Sturgeons (Acipenseridae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-sturgeons-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Suckers
    $('.family-suckers-filter').click(function () {
        $familyFilter = "suckers";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Suckers (Catostomidae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-suckers-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Sunfishes
    $('.family-sunfishes-filter').click(function () {
        $familyFilter = "sunfishes";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Sunfishes (Centrarchidae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-sunfishes-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Temperate Basses
    $('.family-temperateBasses-filter').click(function () {
        $familyFilter = "temperateBasses";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Temperate Basses (Moronidae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-temperateBasses-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Troutperches
    $('.family-troutperches-filter').click(function () {
        $familyFilter = "troutperches";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Troutperches (Percopsidae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-troutperches-filter').addClass("selectedFilter");
        $(this).updateList();
    });


    // Trouts
    $('.family-trouts-filter').click(function () {
        $familyFilter = "trouts";
        $('.lblFamilyTitle').html("<span style='font-size: 24px; color: green;'>Trouts (Salmonidae)</span>");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $('.family-trouts-filter').addClass("selectedFilter");
        $(this).updateList();
    });




    // Clear selection
    $('.resetFamily').click(function () {
        $familyFilter = "none";
        $('.lblFamilyTitle').text("-- Family --");
        $(".accordion").accordion("option", "active", -1);
        $('[class*="family-"]').removeClass("selectedFilter");
        $(this).updateList();
    });







    // *********************  Reset all filters ********************//

    // Reset All Filters
    $('.resetAllFilters').click(function () {
        $('[class*="mouth-"]').removeClass("selectedFilter");
        $('[class*="spine-"]').removeClass("selectedFilter");
        $('[class*="tail-"]').removeClass("selectedFilter");
        $('[class*="body-shape-"]').removeClass("selectedFilter");
        $('[class*="body-pattern-"]').removeClass("selectedFilter");
        $('[class*="distinctive-"]').removeClass("selectedFilter");
        $('[class*="family-"]').removeClass("selectedFilter");
        $(this).resetList();   
    });







    // *********************  Image zoom ********************//


    $(".mainImage").hover(
          function () {
              this.src = this.src.replace("Thumbnails", "Large_Images");  
          },
          function () {
              this.src = this.src.replace("Large_Images", "Thumbnails");  
    });



    $("li").hover(
      function () {       
          $(this).addClass("highlight");
      },
      function () {
          $(this).removeClass("highlight");
      }
    );

 

    //$(".mainImage").hover(
    //     function () {
    //         $(this).animate({
    //             top: '50%',
    //             left: '50%',
    //             width: '450px',
    //             height: 'auto',
    //             padding: '10px'
    //         }, 500);
    //     },
    //     function () {
    //         $(this).animate({
    //             marginTop: '0',
    //             marginLeft: '0',
    //             top: '0',
    //             left: '0',
    //             width: '150px',
    //             height: 'auto',
    //             padding: '5px'
    //         }, 400);
    //     });




};





//This function checks the value of all fish filter choices and filters the list against them
$.fn.updateList = function () {

    var allClasses = "." + $mouthFilter + "." + $spineFilter + "." + $tailFilter + "." + $bodyShapeFilter + "." + $bodyPatternFilter + "." + $distinctiveFeatureFilter + "." + $familyFilter;
    var count = $(allClasses).size();

    if (count == 0) {
        $('.none').hide();
    };

    if (count > 0) {

        // Reset the list
        $('.none').hide();

        // Display only the ones that match the selected filters
        $(allClasses).show();  
    };


    // Show the count of the results
    $('.jsResultsCount').show();
    $('.jsCount').text(count);


    // Hide count if there are no filters
    var filterCount = $('.selectedFilter').size();
    if (filterCount == 0) {
        $('.jsResultsCount').hide();
    };

};






//This function resets the list of fish
$.fn.resetList = function () {

    // Reset all titles
    $('.lblSnoutShapeTitle').text("-- Snout Shape --");
    $('.lblSpinesTitle').text("-- Spines --");
    $('.lblTailShapeTitle').text("-- Tail Shape --");
    $('.lblBodyShapeTitle').text("-- Body Shape --");
    $('.lblBodyPatternTitle').text("-- Body Pattern --");
    $('.lblDistinctiveFeaturesTitle').text("-- Distinctive Features --");
    $('.lblFamilyTitle').text("-- Family --");

    // Reset all radio buttons
    $('input').attr('checked', null);
   
    // Collapse the accordion
    $(".accordion").accordion("option", "active", -1);

    // Hide the results count
    $('.jsResultsCount').hide();
    
    // reset all filter variables
    $mouthFilter = "none";
    $spineFilter = "none";
    $tailFilter = "none";
    $bodyShapeFilter = "none";
    $bodyPatternFilter = "none";
    $distinctiveFeatureFilter = "none";
    $familyFilter = "none";

    var allClasses = "." + $mouthFilter + "." + $spineFilter + "." + $tailFilter + "." + $bodyShapeFilter + "." + $bodyPatternFilter + "." + $distinctiveFeatureFilter + "." + $familyFilter;

    // reset the fish count and list of all fish
    $(allClasses).show();

};


