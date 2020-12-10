<template>
<div>
  
 <b-navbar class="header d-print-none app-header" >
  
    <b-nav>
      <b-nav-item style=" background-color: #FFFFFF;   width: 60%;">
         <div class="site-branding-text" >    
           <img src="../../assets/logave1.png" alt="" width="95%">    
         </div>
      </b-nav-item>      
    </b-nav> 
    <b-nav class="ml-auto">    
      <b-nav-item-dropdown id="v-step-2" class="settingsDropdown d-sm-down-none" no-caret right>      
       <b-dropdown-divider />       
      </b-nav-item-dropdown>
    </b-nav>
  </b-navbar>
</div>
 
</template>

<script>
export default {
  name: 'Header',
  props:['name','ru'],
   data() {
    return {    
      
      };
  },
  components: {  },
  computed: {
    
  },
  methods: {
   
  }
};
</script>

<style src="./Header.scss" lang="scss"></style>
