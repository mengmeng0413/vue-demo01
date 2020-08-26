/* eslint-disable */ 
import Vue from 'vue';
import VueRouter from 'vue-router';
import first from '../components/first.vue';
import slideshow from '../components/slideshow.vue';
import scroll from '../components/scroll.vue';
import cascader from '../components/cascader.vue';
import table from '../components/table.vue';
import iterator from '../components/iterator.vue';
import tagtext from '../components/tagtext.vue';
import shadow from '../components/shadow.vue';
import cssthree from '../components/cssthree.vue';
import async from '../components/async.vue';
import flex from '../components/flex.vue';
import grid from '../components/grid.vue';
import totop from '../components/totop.vue';
import battery from '../components/battery.vue';
import tree from '../components/tree.vue';
import g6 from '../components/g6.vue';
import mytestg6 from '../components/mytestg6.vue';
import tryg6 from '../components/tryg6.vue';
import tryvuex from '../components/tryvuex.vue';
import vfd from '../components/vfd.vue';
import ueditor from '../components/ueditor.vue';
import masonry from '../components/masonry.vue';
import deletediv from '../components/deletediv.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { 
      path:'/first', 
      component: first
    },
    {
      path:'/slideshow', 
      component: slideshow 
    },
    {
      path:'/scroll', 
      component: scroll 
    },
    { 
      path:'/cascader', 
      component: cascader 
    },
    { 
      path:'/table', 
      component: table 
    },
    { 
      path:'/iterator', 
      component: iterator 
    },
    { 
      path:'/tagtext', 
      component: tagtext
    },
    { 
      path:'/shadow', 
      component: shadow
    },
    { 
      path:'/cssthree', 
      component: cssthree
    },
    { 
      path:'/async', 
      component: async
    },
    { 
      path:'/flex', 
      component: flex
    },
    { 
      path:'/grid', 
      component: grid
    },
    { 
      path:'/totop', 
      component: totop
    },
    { 
      path:'/battery', 
      component: battery
    },
    { 
      path:'/tree', 
      component: tree,
    },
    { 
      path:'/g6', 
      component: g6
    },
    { 
      path:'/tryg6', 
      component: tryg6
    },
    { 
      path:'/tryvuex', 
      component: tryvuex
    },
    { 
      path:'/vfd', 
      component: vfd
    },
    { 
      path:'/mytestg6', 
      component: mytestg6
    },
    { 
      path:'/ueditor', 
      component: ueditor
    },
    { 
      path:'/masonry', 
      component: masonry
    },
    { 
      path:'/deletediv', 
      component: deletediv
    }
  ]
});
