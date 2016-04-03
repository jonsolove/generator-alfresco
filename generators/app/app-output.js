'use strict';
var _ = require('lodash');
var chalk = require('chalk');
var size = require('window-size');
var wrap = require('wrap-ansi');

/*
 *
 * Usage:
 * ... inside generator code
 * this.out = require('./app-output.js')(this);
 * this.out.info('Something amazing');
 * this.out.warn('Something alarming');
 * this.out.error('Something abominable');
 *
 */

module.exports = function(yo) {
  var module = {};

  var ALF_BLUE    = _.flow(chalk.bold, chalk.blue);
  var ALF_BLUE2   = _.flow(chalk.dim, chalk.blue);
  var ALF_ORANGE  = _.flow(chalk.dim, chalk.yellow);
  var ALF_ORANGE2 = _.flow(chalk.bold, chalk.yellow);
  var ALF_GREEN   = _.flow(chalk.bold, chalk.green);
  var ALF_GREEN2  = _.flow(chalk.dim, chalk.green);

  var GEN_TEXT    = _.flow(chalk.dim, chalk.red);
  var ALF_TEXT    = _.flow(chalk.bold, chalk.gray);

  module.size = require('window-size');
  module.info = function(message) {
    yo.log(wrap(chalk.bold(chalk.green('INFO:  ') + message), size.width));
  };

  module.warn = function(message) {
    yo.log(wrap(chalk.bold(chalk.yellow('WARN:  ') + message), size.width));
  };

  module.error = function(message) {
    yo.log(wrap(chalk.bold(chalk.red('ERROR: ') + message), size.width));
  };

  module.docs = function(text, link) {
    if (text) {
      yo.log(wrap(chalk.dim.yellow(text), size.width));
    }
    if (link) {
      yo.log(chalk.dim.green('See: ') + chalk.blue.underline(link));
    }
  };

  module.definition = function(term, def) {
    yo.log(wrap(chalk.bold.yellow(term + ': ') + chalk.dim.yellow(def), size.width));
  };

  module.rawBannerText = function(leftPadding) {
    var LEFT_PAD = leftPadding || '    ';
    var banner = [
                    LEFT_PAD + '         ,****.',
                    LEFT_PAD + '    ,.**. `*****  <-_                                     ___  ____  __ _  ____  ____   __  ____  __  ____',
                    LEFT_PAD + '   ******** ***** ####                                   / __)(  __)(  ( \\(  __)(  _ \\ / _\\(_  _)/  \\(  _ \\',
                    LEFT_PAD + '  $********::**** ####;                                 ( (_ \\ ) _) /    / ) _)  )   //    \\ )( (  O ))   /',
                    LEFT_PAD + '  _.-._`***::*** ######                                  \\___/(____)\\_)__)(____)(__\\_)\\_/\\_/(__) \\__/(__\\_)',
                    LEFT_PAD + ',*******, *::* .;##### @       ___       __       _______ .______    _______     _______.  ______   ______',
                    LEFT_PAD + '**********,\' -=#####\',@@@     /   \\     |  |     |   ____||   _  \\  |   ____|   /       | /      | /  __  \\',
                    LEFT_PAD + '***\' .,---, ,.-==@@@@@@@@    /  ^  \\    |  |     |  |__   |  |_)  | |  |__     |   (----`|  ,----\'|  |  |  |',
                    LEFT_PAD + ' * /@@@@@\',@ @\\ \'@@@@@@@    /  /_\\  \\   |  |     |   __|  |  .   /  |   __|     \\   \\    |  |     |  |  |  |',
                    LEFT_PAD + '  \'@@@@/ @@@ @@@\\ \':#\'     /  _____  \\  |  `----.|  |     |  |\\  \\  |  |____.----)   |   |  `----.|  `--\'  |',
                    LEFT_PAD + '  !@@@@ @@@@ @@@@@@@@@^   /__/     \\__\\ |_______||__|     | _| \\__\\ |_______|_______/     \\______| \\______/',
                    LEFT_PAD + '   @@@@ @@@@@ @@@@@@@\'',
                    LEFT_PAD + '    `"$ \'@@@@@. \'##\'',
                    LEFT_PAD + '         \'@@@@;\'',
                    ''
                  ].join('\n');
    return banner;
  };

  module.bannerText = function(leftPadding) {
    var ALF_BLUE   = _.flow(chalk.dim, chalk.blue);
    var ALF_ORANGE = _.flow(chalk.dim, chalk.yellow);
    var ALF_GREEN  = _.flow(chalk.dim, chalk.green);

    var GEN_TEXT   = _.flow(chalk.dim, chalk.red);
    var ALF_TEXT   = _.flow(chalk.bold, chalk.gray);

    var LEFT_PAD = leftPadding || '    ';
    var banner = [
                    LEFT_PAD + ALF_BLUE('         ,****.'),
                    LEFT_PAD + ALF_BLUE('    ,.**. `*****  ') + ALF_ORANGE('<-_                                     ') + GEN_TEXT('___  ____  __ _  ____  ____   __  ____  __  ____'),
                    LEFT_PAD + ALF_BLUE('   ******** ***** ') + ALF_ORANGE('####                                   ') + GEN_TEXT('/ __)(  __)(  ( \\(  __)(  _ \\ / _\\(_  _)/  \\(  _ \\'),
                    LEFT_PAD + ALF_BLUE('  $********::**** ') + ALF_ORANGE('####;                                 ') + GEN_TEXT('( (_ \\ ) _) /    / ) _)  )   //    \\ )( (  O ))   /'),
                    LEFT_PAD + ALF_BLUE('  _.-._`***::*** ') + ALF_ORANGE('######                                  ') + GEN_TEXT('\\___/(____)\\_)__)(____)(__\\_)\\_/\\_/(__) \\__/(__\\_)'),
                    LEFT_PAD + ALF_BLUE(',*******, *::* ') + ALF_ORANGE('.;##### ') + ALF_GREEN('@       ') + ALF_TEXT('___       __       _______ .______    _______     _______.  ______   ______'),
                    LEFT_PAD + ALF_BLUE('**********,\' ') + ALF_ORANGE('-=#####\'') + ALF_GREEN(',@@@     ') + ALF_TEXT('/   \\     |  |     |   ____||   _  \\  |   ____|   /       | /      | /  __  \\'),
                    LEFT_PAD + ALF_BLUE('***\' ') + ALF_GREEN('.,---, ,.-==@@@@@@@@    ') + ALF_TEXT('/  ^  \\    |  |     |  |__   |  |_)  | |  |__     |   (----`|  ,----\'|  |  |  |'),
                    LEFT_PAD + ALF_BLUE(' * ') + ALF_GREEN('/@@@@@\',@ @\\ \'@@@@@@@    ') + ALF_TEXT('/  /_\\  \\   |  |     |   __|  |  .   /  |   __|     \\   \\    |  |     |  |  |  |'),
                    LEFT_PAD + ALF_GREEN('  \'@@@@/ @@@ @@@\\ \':#\'     ') + ALF_TEXT('/  _____  \\  |  `----.|  |     |  |\\  \\  |  |____.----)   |   |  `----.|  `--\'  |'),
                    LEFT_PAD + ALF_GREEN('  !@@@@ @@@@ @@@@@@@@@^   ') + ALF_TEXT('/__/     \\__\\ |_______||__|     | _| \\__\\ |_______|_______/     \\______| \\______/'),
                    LEFT_PAD + ALF_GREEN('   @@@@ @@@@@ @@@@@@@\''),
                    LEFT_PAD + ALF_GREEN('    `"$ \'@@@@@. \'##\''),
                    LEFT_PAD + ALF_GREEN('         \'@@@@;\''),
                    ''
                  ].join('\n');
    return banner;
  };

  module.fancyBannerText = function(leftPadding) {
    var LEFT_PAD = leftPadding || '    ';
    var banner = [
                    LEFT_PAD + ALF_BLUE('         ,****.'),
                    LEFT_PAD + ALF_BLUE('    ,.**') + ALF_BLUE2('. ') + ALF_BLUE('`*****  ') + ALF_ORANGE('<-_                                     ') + GEN_TEXT('___  ____  __ _  ____  ____   __  ____  __  ____'),
                    LEFT_PAD + ALF_BLUE('   *****') + ALF_BLUE2('*** ') + ALF_BLUE('**') + ALF_BLUE2('*** ') + ALF_ORANGE('####                                   ') + GEN_TEXT('/ __)(  __)(  ( \\(  __)(  _ \\ / _\\(_  _)/  \\(  _ \\'),
                    LEFT_PAD + ALF_BLUE('  $*****') + ALF_BLUE2('***:') + ALF_BLUE(':') + ALF_BLUE2('**** ') + ALF_ORANGE('####;                                 ') + GEN_TEXT('( (_ \\ ) _) /    / ) _)  )   //    \\ )( (  O ))   /'),
                    LEFT_PAD + ALF_BLUE2('  _.-._`*') + ALF_BLUE2('**:') + ALF_BLUE(':') + ALF_BLUE2('*** ') + ALF_ORANGE('##') + ALF_ORANGE2('##') + ALF_ORANGE('##                                  ') + GEN_TEXT('\\___/(____)\\_)__)(____)(__\\_)\\_/\\_/(__) \\__/(__\\_)'),
                    LEFT_PAD + ALF_BLUE(',**') + ALF_BLUE2('*****, *') + ALF_BLUE2('::') + ALF_BLUE2('* ') + ALF_ORANGE('.;') + ALF_ORANGE2('##### ') + ALF_GREEN('@       ') + ALF_TEXT('___       __       _______ .______    _______     _______.  ______   ______'),
                    LEFT_PAD + ALF_BLUE('****') + ALF_BLUE2('******,') + ALF_BLUE('\' ') + ALF_ORANGE('-=') + ALF_ORANGE2('#####\'') + ALF_GREEN(',@@@     ') + ALF_TEXT('/   \\     |  |     |   ____||   _  \\  |   ____|   /       | /      | /  __  \\'),
                    LEFT_PAD + ALF_BLUE('***\' ') + ALF_GREEN2('.,---') + ALF_GREEN(', ,.') + ALF_GREEN2('-==@@') + ALF_GREEN('@@@@@@    ') + ALF_TEXT('/  ^  \\    |  |     |  |__   |  |_)  | |  |__     |   (----`|  ,----\'|  |  |  |'),
                    LEFT_PAD + ALF_BLUE(' * ') + ALF_GREEN2('/@@@@@') + ALF_GREEN('\'') + ALF_GREEN2(',@ @') + ALF_GREEN('\\ ') + ALF_GREEN2('\'@@@@@') + ALF_GREEN('@@    ') + ALF_TEXT('/  /_\\  \\   |  |     |   __|  |  .   /  |   __|     \\   \\    |  |     |  |  |  |'),
                    LEFT_PAD + ALF_GREEN2('  \'@@@@') + ALF_GREEN('/ ') + ALF_GREEN2('@@@ @@@') + ALF_GREEN('\\ ') + ALF_GREEN2('\':#\'     ') + ALF_TEXT('/  _____  \\  |  `----.|  |     |  |\\  \\  |  |____.----)   |   |  `----.|  `--\'  |'),
                    LEFT_PAD + ALF_GREEN('  !@@@@ ') + ALF_GREEN2('@@@@ @@@@') + ALF_GREEN('@@@@@^   ') + ALF_TEXT('/__/     \\__\\ |_______||__|     | _| \\__\\ |_______|_______/     \\______| \\______/'),
                    LEFT_PAD + ALF_GREEN('   @@@@ ') + ALF_GREEN2('@@@') + ALF_GREEN('@@ ') + ALF_GREEN2('@@@') + ALF_GREEN('@@@@\''),
                    LEFT_PAD + ALF_GREEN('    `"$ ') + ALF_GREEN2('\'') + ALF_GREEN('@@@@@. ') + ALF_GREEN2('\'') + ALF_GREEN('##\''),
                    LEFT_PAD + ALF_GREEN('         \'@@@@;\''),
                    ''
                  ].join('\n');
    return banner;
  };

  module.rawLogoText = function(leftPadding) {
    var LEFT_PAD = leftPadding || '    ';
    var banner = [
              LEFT_PAD + '         ,****.',
              LEFT_PAD + '    ,.**. `*****  <-_',
              LEFT_PAD + '   ******** ***** ####',
              LEFT_PAD + '  $********::**** ####;',
              LEFT_PAD + '  _.-._`***::*** ######',
              LEFT_PAD + ',*******, *::* .;##### @',
              LEFT_PAD + '**********,\' -=#####\',@@@',
              LEFT_PAD + '***\' .,---, ,.-==@@@@@@@@',
              LEFT_PAD + ' * /@@@@@\',@ @\\ \'@@@@@@@',
              LEFT_PAD + '  \'@@@@/ @@@ @@@\\ \':#\'',
              LEFT_PAD + '  !@@@@ @@@@ @@@@@@@@@^',
              LEFT_PAD + '   @@@@ @@@@@ @@@@@@@\'',
              LEFT_PAD + '    `"$ \'@@@@@. \'##\'',
              LEFT_PAD + '         \'@@@@;\'',
              '',
              LEFT_PAD + '   GENERATOR ALFRESCO',
              ''
            ].join('\n');
    return banner;
  };
  
  module.fancyLogoText = function(leftPadding) {
    var LEFT_PAD = leftPadding || '    ';
    var banner = [
              LEFT_PAD + ALF_BLUE('         ,****.'),
              LEFT_PAD + ALF_BLUE('    ,.**') + ALF_BLUE2('. ') + ALF_BLUE('`*****  ') + ALF_ORANGE('<-_'),
              LEFT_PAD + ALF_BLUE('   *****') + ALF_BLUE2('*** ') + ALF_BLUE('**') + ALF_BLUE2('*** ') + ALF_ORANGE('####'),
              LEFT_PAD + ALF_BLUE('  $*****') + ALF_BLUE2('***:') + ALF_BLUE(':') + ALF_BLUE2('**** ') + ALF_ORANGE('####;'),
              LEFT_PAD + ALF_BLUE2('  _.-._`*') + ALF_BLUE2('**:') + ALF_BLUE(':') + ALF_BLUE2('*** ') + ALF_ORANGE('##') + ALF_ORANGE2('##') + ALF_ORANGE('##'),
              LEFT_PAD + ALF_BLUE(',**') + ALF_BLUE2('*****, *') + ALF_BLUE2('::') + ALF_BLUE2('* ') + ALF_ORANGE('.;') + ALF_ORANGE2('##### ') + ALF_GREEN('@'),
              LEFT_PAD + ALF_BLUE('****') + ALF_BLUE2('******,') + ALF_BLUE('\' ') + ALF_ORANGE('-=') + ALF_ORANGE2('#####\'') + ALF_GREEN(',@@@'),
              LEFT_PAD + ALF_BLUE('***\' ') + ALF_GREEN2('.,---') + ALF_GREEN(', ,.') + ALF_GREEN2('-==@@') + ALF_GREEN('@@@@@@'),
              LEFT_PAD + ALF_BLUE(' * ') + ALF_GREEN2('/@@@@@') + ALF_GREEN('\'') + ALF_GREEN2(',@ @') + ALF_GREEN('\\ ') + ALF_GREEN2('\'@@@@@') + ALF_GREEN('@@'),
              LEFT_PAD + ALF_GREEN2('  \'@@@@') + ALF_GREEN('/ ') + ALF_GREEN2('@@@ @@@') + ALF_GREEN('\\ ') + ALF_GREEN2('\':#\''),
              LEFT_PAD + ALF_GREEN('  !@@@@ ') + ALF_GREEN2('@@@@ @@@@') + ALF_GREEN('@@@@@^'),
              LEFT_PAD + ALF_GREEN('   @@@@ ') + ALF_GREEN2('@@@') + ALF_GREEN('@@ ') + ALF_GREEN2('@@@') + ALF_GREEN('@@@@\''),
              LEFT_PAD + ALF_GREEN('    `"$ ') + ALF_GREEN2('\'') + ALF_GREEN('@@@@@. ') + ALF_GREEN2('\'') + ALF_GREEN('##\''),
              LEFT_PAD + ALF_GREEN('         \'@@@@;\''),
              '',
              LEFT_PAD + GEN_TEXT('   GENERATOR') + ALF_TEXT(' ALFRESCO'),
              ''
            ].join('\n');
    return banner;
  };
  
  module.rawBanner = function(leftPadding, width) {
    var p = leftPadding || '    ';
    var w = width || size.width;
    if (w >= (110 + p.length)) {
      yo.log(module.rawBannerText(p));
    } else {
      yo.log(module.rawLogoText(p));
    }
  }

  module.banner = function(leftPadding, width) {
    var p = leftPadding || '    ';
    var w = width || size.width;
    if (w >= (110 + p.length)) {
      yo.log(module.fancyBannerText(p));
    } else {
      yo.log(module.fancyLogoText(p));
    }
  }

  return module;
};

// vim: autoindent expandtab tabstop=2 shiftwidth=2 softtabstop=2
