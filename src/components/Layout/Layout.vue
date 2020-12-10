<template>
<div > 
  <div class="">
   <Header  />
          <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000"
          fade
          indicators
          img-width="800"
          img-height="450"
        >
          <b-carousel-slide     
           >
           <div  class="d-md-down-none">
             <h5 style="margin-top:-320px;float:left;color:black;font-size:2vw; margin-left:-10%"><strong>  <i>Ofreces un mejor servicio  </i></strong></h5>
             <p style="margin-top:-280px;float:left;color:black;font-size:1.8vw;text-align:justify;margin-left:-10%">   <i>   Tus clientes preferirán a aquellas empresas que ofrezcan  </i><br /> <i>facturas   electrónicas, puesto a que   se trata de </i>  <br />  <i> un proceso más rápido.Al ser facturador electrónico </i> <br />  <i> ofreces un mejor servicio y atraes a más clientes.</i> </p>
             </div>
            <div class="d-md-none">
               <h5 style="margin-top:-320px;float:left;color:black;font-size:4vw; margin-left:-10%"><strong>  <i>Ofreces un mejor servicio  </i></strong></h5>
               <p style="margin-top:-280px;float:left;color:black;font-size:3.3vw;text-align:justify;margin-left:-10%">    <i>   Tus clientes preferirán a aquellas empresas que ofrezcan  </i><br /> <i>facturas   electrónicas, puesto a que   se trata de </i>  <br />  <i> un proceso más rápido.Al ser facturador electrónico </i> <br />  <i> ofreces un mejor servicio y atraes a más clientes.</i> </p>
          
            </div>
           
             <template #img>              
              <img
                class="class-name"
                 width="100%"            
                src="../../assets/fondos1.jpg"
                alt="image slot"
              >
           </template>
          </b-carousel-slide>

          <b-carousel-slide>
              
              <div  class="d-md-down-none">
             <h5 style="margin-top:-320px;float:left;font-size:2vw; margin-left:-10%"><strong>  <i>FACTURACION ELECTRONICA EN LA NUBE  </i></strong></h5>
             <p style="margin-top:-280px;float:left;font-size:1.8vw;text-align:justify;margin-left:-10%"> <i>  Nuestro sistema esta orientado a todos los  negocios </i><br /> <i>  que desean emitir de nanera rapida,facil y economica.</i> <br />  <i>  Usted podra emitir desde cualquier dispositivo pc, tablet o  </i> <br />  <i style="color:black"> celular e imprimirlo en formato A4, A5 o ticket  </i> </p>
             </div>
            <div class="d-md-none">
               <h5 style="margin-top:-320px;float:left;color:black;font-size:4vw; margin-left:-10%"><strong>  <i>FACTURACION ELECTRONICA EN LA NUBE </i></strong></h5>
               <p style="margin-top:-280px;float:left;color:black;font-size:3.3vw;text-align:justify;margin-left:-10%">     <i>  Nuestro sistema esta orientado a todos los  negocios </i><br /> <i>  que desean emitir de nanera rapida,facil y economica.</i> <br />  <i>  Usted podra emitir desde cualquier dispositivo pc, tablet o  </i> <br />  <i> celular e imprimirlo en formato A4, A5 o ticket  </i> </p>
          
            </div>
              <template #img>
              <img
                class="class-name"
                 width="100%"            
                src="../../assets/factura4.png"
                alt="image slot"
              >
        </template>
          </b-carousel-slide>
          <b-carousel-slide>
          <div class="d-md-down-none">
             <h5 style="margin-top:-320px;float:left;color:black;font-size:2vw; margin-left:-10%"><strong> <i> Controla mejor tu negocio</i> </strong></h5>
             <p style="margin-top:-280px;float:left;color:black;font-size:1.8vw;text-align:justify; margin-left:-10%">   <i> Los documentos electrónicos te ayudarán a evitar la pérdida  </i><br />  <i> y deterioro de documentos en papel. Igualmente, al contar </i><br />  <i>con una mejor organización y almacenamiento de tus facturas. </i> </p>
           </div>  
         
            <div class="d-md-none">
             <h5 style="margin-top:-300px;float:left;color:black;font-size:4vw; margin-left:-10%"><strong> <i> Controla mejor tu negocio</i> </strong></h5>
             <p style="margin-top:-260px;float:left;color:black;font-size:3.3vw;text-align:justify; margin-left:-10%">   <i> Los documentos electrónicos te ayudarán a evitar la pérdida  </i><br />  <i> y deterioro de documentos en papel. Igualmente, al contar </i><br />  <i>con una mejor organización y almacenamiento de tus facturas. </i> </p>
           </div>  
         
            <template #img>
              <img
                class="class-name"
                 width="100%"            
                src="../../assets/slider2.jpg"
                alt="image slot"
              >
        </template>
          </b-carousel-slide>
        </b-carousel>
    <v-touch class="content" @swipe="handleSwipe" :swipe-options="{direction: 'horizontal'}">  
      <br><br>
      <transition name="router-animation">
        <div class="container">      
            <b-card-group deck>            
              <b-card header-tag="header" footer-tag="footer">
                <template #header>
                   <center>  <h2 class="mb-0" style=" color: #09A0E7; font-weight: bold;">Plan Básico</h2> </center>                
                </template>
               <b-card-title> 
                  <center>
                   <div style="display: flex; justify-content:center;align-items:center;">                     
                    <h5  style="color:orange;margin-botton:10px">S/.</h5>
                   <h1 style="color:orange" >   50.00 </h1>     
                    <h5  style="color:orange">Mensual</h5>              
                 </div>
                 <h5>PAGO ANUAL A SOLO S/500.00</h5>
                </center>
              </b-card-title>     
              <br>          
                <b-card-text>Dirigido a Clientes que solo necesitan emitir comprobantes electrónicos(Facturas, boletas, notas de credito, notas de debito, resumenes de boletas y comunicaciones de baja) para cumplir con la exigencia de sunat.</b-card-text>
                  <b-list-group flush>
                    <b-list-group-item> <div style="display: flex; ">  <h6 style="color:orange;margin-right:5px">Acceo a :</h6>  <h5>01 Usuarios</h5>  </div></b-list-group-item>
                    <b-list-group-item>  <div style="display: flex; ">  <label style="color:orange;margin-right:5px"> Puede Emitir :</label> <h5> Hasta 200 Comprobantes</h5>  </div>  </b-list-group-item>
                    <b-list-group-item>Emisión de Facturas, Boletas, Notas de Credito, Notas de Debito, Resumenes de Boletas y comunicaciónes de Baja</b-list-group-item>
                     <b-list-group-item>Reporte de Ventas en excel</b-list-group-item>
                     <b-list-group-item>Catalogo de Productos</b-list-group-item>
                     <b-list-group-item>Salida de impresión(A4, Ticket, A5)</b-list-group-item>
                 </b-list-group>
                <template #footer>
                  <em>Los Precios Incluyen el IGV </em>
                </template>
              </b-card>
              <b-card header-tag="header" footer-tag="footer">
                <template #header>
                <center>  <h2 class="mb-0" style=" color: #09A0E7;font-weight: bold;">Plan Standar</h2> </center>
                </template>
                <b-card-title> 
                  <center>
                   <div style="display: flex; justify-content:center;align-items:center;">                     
                    <h5  style="color:orange;margin-botton:10px">S/.</h5>
                  <h1 style="color:orange" >   85.00 </h1>     
                    <h5  style="color:orange">Mensual</h5>              
                 </div>
                   <h5>PAGO ANUAL A SOLO S/850.00</h5>
                </center>
              </b-card-title>    
              <br>           
                <b-card-text>Dirigido para clientes que requieren emitir comprobantes electrónicos(Facturas, boletas, notas de credito, notas de debito, resumenes de boletas y comunicaciones de baja) y controlar sus compras, ventas y saldo de mercaderias, emitir cotizaciónes.</b-card-text>
                  <b-list-group flush>
                    <b-list-group-item> <div style="display: flex; ">  <h6 style="color:orange;margin-right:5px">Acceo a :</h6>  <h5>03 Usuarios</h5>  </div> </b-list-group-item>
                    <b-list-group-item><div style="display: flex; ">  <label style="color:orange;margin-right:5px"> Puede Emitir :</label> <h5> Hasta 500 Comprobantes</h5>  </div></b-list-group-item>
                    <b-list-group-item>Emisión de Facturas, Boletas, Notas de Credito, Notas de Debito, Resumenes de Boletas y comunicaciónes de Baja,Guia de Remisión</b-list-group-item>
                     <b-list-group-item>Reporte de Ventas en excel</b-list-group-item>
                     <b-list-group-item>Catalogo de Productos</b-list-group-item>
                     <b-list-group-item>Salida de impresión(A4, Ticket, A5)</b-list-group-item>
                 </b-list-group>
                <template #footer>
                 <em>Los Precios Incluyen el IGV </em>
                </template>
              </b-card>
              <b-card  header-tag="header" footer-tag="footer">
                <template #header>
                   <center>  <h2 class="mb-0" style=" color: #09A0E7; font-weight: bold;">Plan Empresarial</h2> </center>
                </template>
                <b-card-title> 
                  <center>
                   <div style="display: flex; justify-content:center;align-items:center;">                     
                    <h5  style="color:orange;margin-botton:10px">S/.</h5>
                  <h1 style="color:orange" >   120.00 </h1>     
                    <h5  style="color:orange">Mensual</h5>              
                 </div>
                   <h5>PAGO ANUAL A SOLO S/1200.00</h5>
                </center>
              </b-card-title>      
              <br>         
                <b-card-text>Dirigido para clientes que necesitan controlar todos sus procesos compras, ventas, saldos, liquidación de caja, cuentas por cobrar y pagar, cotizaciones y notas de venta.</b-card-text>
                  <b-list-group flush>
                    <b-list-group-item >  <div style="display: flex; ">  <h6 style="color:orange;margin-right:5px">Acceo a :</h6>  <h5>05 Usuarios</h5>  </div> </b-list-group-item>
                    <b-list-group-item><div style="display: flex; ">  <label style="color:orange;margin-right:5px"> Puede Emitir :</label> <h5> Hasta 1000 Comprobantes</h5>  </div> </b-list-group-item>
                    <b-list-group-item>Emisión de Facturas, Boletas, Notas de Credito, Notas de Debito, Resumenes de Boletas y comunicaciónes de Baja,Guia de Remisión, comprobantes de percepcion y retencion</b-list-group-item>
                     <b-list-group-item>Reporte de Ventas en excel</b-list-group-item>
                     <b-list-group-item>Catalogo de Productos</b-list-group-item>
                     <b-list-group-item>Salida de impresión(A4, Ticket, A5)</b-list-group-item>
                 </b-list-group>
                <template #footer>
                   <em>Los Precios Incluyen el IGV </em>
                </template>
              </b-card>
            </b-card-group>
            <br>
            <center>   <img src="../../assets/facturacionfoto.svg" width="50%"></center>
            <br>         
             <b-card border-variant="info" header="Si desea probar nuestro sistema puede ingresar a:" >
              <b-card-text><h5 style="color:green">Direccion Url: test.aveoperu.com</h5>  <h5  style="color:green">Usuario : test@gmail.com</h5>  <h5  style="color:green">contraseña:123456</h5> </b-card-text>
            </b-card>
            <br>
            <b-card bg-variant="light"  header="Consideraciones:" >
              <b-card-text><h5 >No incluye certificado digital, soporte técnico es de lunes a sabados horarios de oficina</h5>  </b-card-text>
            </b-card>
            </div>
      </transition>
      <footer class="contentFooter">
        <!--
        Sing App Vue Dashboard Free Template - Made by <a href="https://flatlogic.com" rel="nofollow noopener noreferrer" target="_blank">Flatlogic</a>
          -->       
        </footer>
    </v-touch>
  </div>
</div>
</template>

<script>
import axios from  'axios'
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('layout');

import Header from '@/components/Header/Header';

import './Layout.scss';

export default {
  name: 'Layout',
  components: { Header },
  data(){
    return {
    
    }
  },
  methods: {
  },
  computed: {
   
  },
  created() {
   
  },
  beforeDestroy() {
   
  }
};
</script>

<style src="./Layout.scss" lang="scss" />
