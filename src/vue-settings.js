import Vue from 'vue';
import CoreuiVue from '@coreui/vue';
import vSelect from 'vue-select';
import {Chrome} from 'vue-color';
import FontPicker from 'font-picker-vue';
import Draggable from 'vuedraggable';
import ColorPicker from './colorpicker';
import { VueEditor } from "vue2-editor";
import '@coreui/coreui/dist/css/coreui.min.css';
import 'vue-select/dist/vue-select.css';
import VueModal from '@kouts/vue-modal'
import '@kouts/vue-modal/dist/vue-modal.css';
var font_options = require('./google-fonts.json');

import { cilPencil, cilSettings, cilInfo, cibGoogleKeep } from '@coreui/icons';
Vue.use(CoreuiVue);
Vue.component('v-modal', VueModal);
Vue.component('vue-editor', VueEditor);
Vue.component('draggable', Draggable);
Vue.component('font-picker', FontPicker);
Vue.component('v-select', vSelect);
Vue.component('chrome', Chrome);
Vue.component('colorpicker', ColorPicker);

const j = jQuery.noConflict();

var gen = new Vue({
    el: '#wplegalpages-settings-app',
    data() {
        return {
            element: "#wplegalpages-settings-app",
            labelIcon: {
                labelOn: '\u2713',
                labelOff: '\u2715'
            },
            appendField: ".wplegalpages-settings-container",
            customToolbarForm:  [],
            domain:'',
            generate:null,
            search:null,
            affiliate_disclosure:null,
            is_adult:null,
            privacy:null,
            privacy_page: '',
            is_footer: obj.lp_options.hasOwnProperty('is_footer') ? Boolean( parseInt( obj.lp_options.is_footer ) ) : false,
            is_banner: obj.lp_options.hasOwnProperty('is_banner') ? Boolean( parseInt( obj.lp_options['is_banner'] ) ) : false,
            page_options: obj.page_options,
            show_footer_form: false,
            show_banner_form: false,
            footer_legal_pages: [],
            link_bg_color: obj.lp_footer_options.hasOwnProperty('footer_bg_color') ? obj.lp_footer_options['footer_bg_color']: '#ffffff',
            footer_font: obj.lp_footer_options.hasOwnProperty('footer_font') ? obj.lp_footer_options['footer_font'] : 'Open Sans',
            font_size_options: Array.from(obj.font_size_options),
            footer_font_size: '16',
            footer_text_color: obj.lp_footer_options.hasOwnProperty('footer_text_color') ? obj.lp_footer_options['footer_text_color']: '#333333',
            footer_text_align: 'center',
            footer_align_options: ['center','left','right'],
            footer_link_color: obj.lp_footer_options.hasOwnProperty('footer_link_color') ? obj.lp_footer_options['footer_link_color']: '#333333',
            footer_separator: obj.lp_footer_options.hasOwnProperty('footer_separator') ? obj.lp_footer_options['footer_separator'] : '',
            footer_new_tab: obj.lp_footer_options.hasOwnProperty('footer_new_tab') ? Boolean( parseInt( obj.lp_footer_options['footer_new_tab'] ) ) : false,
            footer_custom_css: obj.lp_footer_options.hasOwnProperty('footer_custom_css') ? obj.lp_footer_options['footer_custom_css'] : '',
            font_options: font_options,bar_position_options:['top','bottom'],
            bar_position:'top',
            bar_type_options:['fixed','static'],
            bar_type:'fixed',
            banner_bg_color: obj.lp_banner_options.hasOwnProperty('banner_bg_color') ? obj.lp_banner_options['banner_bg_color']: '#ffffff',
            banner_font: obj.lp_banner_options.hasOwnProperty('banner_font') ? obj.lp_banner_options['banner_font'] : 'Open Sans',
            banner_font_id: obj.lp_banner_options.hasOwnProperty('banner_font_id') ? obj.lp_banner_options['banner_font_id'] : 'Open+Sans',
            banner_text_color: obj.lp_banner_options.hasOwnProperty('banner_text_color') ? obj.lp_banner_options['banner_text_color']: '#000000',
            banner_link_color: obj.lp_banner_options.hasOwnProperty('banner_link_color') ? obj.lp_banner_options['banner_link_color']: '#000000',
            banner_number_of_days: Array.from(obj.number_of_days),
            bar_num_of_days:'1',
            banner_custom_css: obj.lp_banner_options.hasOwnProperty('banner_custom_css') ? obj.lp_banner_options['banner_custom_css'] : '',
            banner_close_message: obj.lp_banner_options.hasOwnProperty('banner_close_message') ? obj.lp_banner_options['banner_close_message']: 'Close',
            banner_font_size_option: Array.from(obj.font_size_options),
            banner_font_size:'16',
            banner_message: obj.lp_banner_options.hasOwnProperty('banner_message') ? obj.lp_banner_options['banner_message'] : 'Our [wplegalpages_page_link] have been updated on [wplegalpages_last_updated].',
            banner_multiple_message: obj.lp_banner_options.hasOwnProperty('banner_multiple_message') ? obj.lp_banner_options['banner_multiple_message'] : 'Our [wplegalpages_page_link] pages have recently been updated.',
        }
    },
    methods: {
        setValues: function () {
            this.generate =  this.$refs.hasOwnProperty('generate')? this.$refs.generate.checked : null; 
            this.search =  this.$refs.hasOwnProperty('search')? this.$refs.search.checked : null; 
            this.affiliate_disclosure =this.$refs.hasOwnProperty('affiliate_disclosure')? this.$refs.affiliate_disclosure.checked:null;  
            this.is_adult = this.$refs.hasOwnProperty('is_adult')?this.$refs.is_adult.checked:null; 
            this.privacy =this.$refs.hasOwnProperty('privacy')? this.$refs.privacy.checked:null; 
            this.privacy_page = this.$refs.hasOwnProperty('privacy_page_mount') && this.$refs.privacy_page_mount.value ? this.$refs.privacy_page_mount.value : '';
            this.is_popup =this.$refs.hasOwnProperty('popup') && '1' === this.$refs.popup.value ? true :null;
            this.privacy_page = this.$refs.hasOwnProperty('privacy_page_mount') && this.$refs.privacy_page_mount.value ? this.$refs.privacy_page_mount.value : '';
            this.footer_legal_pages = this.$refs.footer_legal_pages_mount.value ? this.$refs.footer_legal_pages_mount.value.split(',') : [];
            this.footer_font = this.$refs.footer_font_family_mount.value ? this.$refs.footer_font_family_mount.value : 'Open Sans';
            this.footer_font_size = this.$refs.footer_font_size_mount.value ? this.$refs.footer_font_size_mount.value : '16';
            this.footer_text_align = this.$refs.footer_text_align_mount.value ? this.$refs.footer_text_align_mount.value : 'center';
            this.bar_position = this.$refs.hasOwnProperty('bar_position_mount') && this.$refs.bar_position_mount.value ? this.$refs.bar_position_mount.value : '';
            this.bar_type = this.$refs.hasOwnProperty('bar_type_mount') && this.$refs.bar_type_mount.value ? this.$refs.bar_type_mount.value : '';
            this.footer_font = this.$refs.banner_font_family_mount.value ? this.$refs.banner_font_family_mount.value : 'Open Sans';
            this.bar_num_of_days = this.$refs.hasOwnProperty('bar_num_of_days_mount') && this.$refs.bar_num_of_days_mount.value ? this.$refs.bar_num_of_days_mount.value : '';
            this.banner_font_size = this.$refs.hasOwnProperty('banner_font_size_mount') && this.$refs.banner_font_size_mount.value ? this.$refs.banner_font_size_mount.value : '';
            let navLinks = j('.nav-link').map(function () {
                return this.getAttribute('href');
            });
            for (let i = 0; i < navLinks.length; i++) {
                let re = new RegExp(navLinks[i]);
                if (window.location.href.match(re)) {
                    this.$refs.active_tab.activeTabIndex = i;
                    break;
                }
            }
        },
        onChangeCredit(){
            this.generate= !this.generate;
            this.$refs.generate.value = this.generate ? '1' : '0';
        },
        onChangeSearch(){
            this.search= !this.search;
            this.$refs.search.value = this.search ? '1' : '0';
        },
        onChangeAffiliate(){
            this.affiliate_disclosure= !this.affiliate_disclosure;
            this.$refs.affiliate_disclosure.value = this.affiliate_disclosure ? '1' : '0';
        },
        onChangeIsAdult(){
            this.is_adult= !this.is_adult;
            this.$refs.is_adult.value = this.is_adult ? '1' : '0';
        },
        onChangePrivacy(){
            this.privacy= !this.privacy;
            this.$refs.privacy.value = this.privacy ? '1' : '0';
        },
        onClickFooter() {
            this.is_footer = !this.is_footer;
            this.$refs.footer.value = this.is_footer ? '1' : '0';
        },
        showFooterForm() {
            this.show_footer_form = !this.show_footer_form;
        },
        onSwitchFooter() {
            this.is_footer = !this.is_footer;
            this.$refs.switch_footer = this.is_footer ? '1' : '0';
        },
        onFooterFont(val) {
            this.footer_font = val.family;
        },
        onClickNewTab() {
            this.footer_new_tab = !this.footer_new_tab
            this.$refs.footer_new_tab = this.footer_new_tab ? '1' : '0';
        },
        addContainerID() {
            if( !this.footer_custom_css.includes('#wplegalpages_footer_links_container') ) {
                this.footer_custom_css += `#wplegalpages_footer_links_container {\n\n}\n`;
            }
        },
        addLinksClass() {
            if( !this.footer_custom_css.includes('.wplegalpages_footer_link') ) {
                this.footer_custom_css += `.wplegalpages_footer_link {\n\n}\n`;}
        },
        addTextClass() {
            if( !this.footer_custom_css.includes('.wplegalpages_footer_separator_text') ) {
                this.footer_custom_css += `.wplegalpages_footer_separator_text {\n\n}\n`;
            }
        },
        showBannerForm() {
            this.show_banner_form = !this.show_banner_form;
        },
        onClickBanner() {
            this.is_banner = !this.is_banner;
            this.$refs.banner.value = this.is_banner ? '1' : '0';
        },
        onSwitchBanner(){
            this.is_banner = !this.is_banner;
            this.$refs.switch_banner = this.is_banner ? '1' : '0';
        },
        addBannerContainerID() {
            if(!this.banner_custom_css.includes('.wplegalpages_banner_content')) {
                this.banner_custom_css += `.wplegalpages_banner_content{\n\n}\n`;
            }
        },
        addBannerLinksClass(){
            if(!this.banner_custom_css.includes('.wplegalpages_banner_link')) {
                this.banner_custom_css += `.wplegalpages_banner_link{\n\n}\n`;
            }
        },
        addBannerPageCode() {
            if(!this.banner_message.includes('[wplegalpages_page_title]')) {
                this.banner_message = this.banner_message.slice(0, this.banner_message.length)
                this.banner_message +=  '[wplegalpages_page_title]';
            }
        },
        addBannerPageLinkTitle() {
            if(!this.banner_message.includes('[wplegalpages_page_link]')) {
                this.banner_message = this.banner_message.slice(0, this.banner_message.length)
                this.banner_message += '[wplegalpages_page_link]';
            }
        },
        addBannerPageHref() {
            if(!this.banner_message.includes('[wplegalpages_page_href]')){
                this.banner_message = this.banner_message.slice(0, this.banner_message.length)
                this.banner_message += '[wplegalpages_page_href]';
            }
        },
        addBannerPageLed() {
            if(!this.banner_message.includes('[wplegalpages_last_updated]')) {
                this.banner_message += '[wplegalpages_last_updated]';
            }
        },
        addBannerDefaultMsg() {
            this.banner_message = 'Our [wplegalpages_page_link] have been updated on [wplegalpages_last_updated].';
        },
        addBannerMultiplePageCode() {
            if(!this.banner_multiple_message.includes('[wplegalpages_page_title]')) {
                this.banner_multiple_message +=  '[wplegalpages_page_title]';
            }
        },
        addBannerMultiplePageLinkTitle() {
            if(!this.banner_multiple_message.includes('[wplegalpages_page_link]')) {
                this.banner_multiple_message += '[wplegalpages_page_link]';
            }
        },
        addBannerMultipleDefaultMsg() {
            this.banner_multiple_message = 'Our [wplegalpages_page_link] pages have recently been updated.';
        },
        addBannerMultiplePageLed() {
            if(!this.banner_multiple_message.includes('[wplegalpages_last_updated]')) {
                this.banner_multiple_message += '[wplegalpages_last_updated]';
            }
        },
		saveFooterData() {
            jQuery("#wplegalpages-save-settings-alert").fadeIn(400);
            var show_footer = this.is_footer;
			console.log(this.is_footer);
            var pages = JSON.parse(JSON.stringify(this.footer_legal_pages)).join(',');
            var link_bg_color = j('#wplegalpages-lp-form-bg-color').val();
            var footer_font_family = this.footer_font;
            var footer_font_family_id = this.footer_font.split(' ').join('+');
            var footer_fontsize = this.footer_font_size;
            var text_color = j('#wplegalpages-lp-form-text-color').val();
            var footer_align = this.footer_text_align;
            var link_color = j('#wplegalpages-lp-form-link-color').val();
            var separator = j('#wplegalpages-lp-form-separator').val();
            var footer_new_tab = this.footer_new_tab;
            var footer_css = j('#wplegalpages-lp-footer-custom-css').text();
            j.ajax({
                type: 'POST',
                url: obj.ajaxurl,
                data: {
                    'action': 'lp_save_footer_form',
                    'lp-footer-pages': pages,
                    'lp-is-footer': show_footer,
                    'lp-footer-link-bg-color': link_bg_color,
                    'lp-footer-font': footer_font_family,
                    'lp-footer-font-family-id': footer_font_family_id,
                    'lp-footer-font-size': footer_fontsize,
                    'lp-footer-text-color': text_color,
                    'lp-footer-align': footer_align,
                    'lp-footer-link-color': link_color,
                    'lp-footer-separator': separator,
                    'lp-footer-new-tab': footer_new_tab,
                    'lp-footer-css': footer_css,
                    'lp_footer_nonce_data': j('#wplegalpages-footer-form-nonce').val(),
                },
                success: function(data) {
					j("#wplegalpages-save-settings-alert").fadeOut(2500);
                }    
            })

			this.showFooterForm();
		},
        saveBannerData() {
            jQuery("#wplegalpages-save-settings-alert").fadeIn(400);
            var show_banner = this.is_banner;
            var bar_pos = this.bar_position;
            var type_bar = this.bar_type;
            var banner_back_color = j('#wplegalpages-lp-banner-bg-color').val();
            var banner_fnt = this.banner_font;
            var banner_font_id = this.banner_font.split(' ').join('+');
            var banner_text_color = j('#wplegalpages-lp-banner-text-color').val();
            var banner_font_size = this.banner_font_size;
            var banner_link_color = j('#wplegalpages-lp-banner-link-color').val();
            var bar_days = this.bar_num_of_days;
            var banner_css = j('#wplegalpages-lp-banner-custom-css').text();
            var banner_close_message = this.banner_close_message;
            var banner_msg = j('#wplegalpages-lp-banner-message').text(); 
            var banner_multiple_msg = j('#wplegalpages-lp-banner-multiple-message').text();
            j.ajax({
                type: 'POST',
                url: obj.ajaxurl,
                data: {
                'action': 'save_banner_form',
                'lp-is-banner': show_banner,
                'lp-bar-position':bar_pos,
                'lp-bar-type':type_bar,
                'lp-banner-bg-color':banner_back_color,
                'lp-banner-font':banner_fnt,
                'lp-banner-font-id':banner_font_id,
                'lp-banner-text-color':banner_text_color,
                'lp-banner-font-size': banner_font_size,
                'lp-banner-link-color':banner_link_color,
                'lp-bar-num-of-days':bar_days,
                'lp-banner-css': banner_css,
                'lp-banner-close-message': banner_close_message,
                'lp-banner-message' : banner_msg,
                'lp-banner-multiple-msg': banner_multiple_msg,
                'lp_banner_nonce_data': j('#wplegalpages-banner-form-nonce').val(),
            },
            success: function(data) {
                j("#wplegalpages-save-settings-alert").fadeOut(2500);
            }
            })
            this.showBannerForm();
        },
        saveGeneralSettings() {
            jQuery("#wplegalpages-save-settings-alert").fadeIn(400);
            var dataV = jQuery("#lp-save-settings-form").serialize();
            jQuery.ajax({
                type: 'POST',
                url: obj.ajaxurl,
                data: dataV + '&action=lp_save_admin_settings', 
            }).done(function (data) {
                j("#wplegalpages-save-settings-alert").fadeOut(2500);
            });
        }
    },
    mounted() {
        this.setValues();
        j('#testing').css('display','none');
    },
    icons: { cilPencil, cilSettings, cilInfo, cibGoogleKeep }
})