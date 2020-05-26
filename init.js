$(function() {
  var App = {};

  App.peru_cases = new DataFunction("https://rt-region-peru.glitch.me/final_results_apu.csv", "ChartAMA");
  App.peru_cases.init();

  App.peru_cases = new DataFunction("https://rt-region-peru.glitch.me/final_results_anc.csv", "ChartANC");
  App.peru_cases.init();

  setTimeout(function() {
    App.peru_cases = new DataFunction("https://rt-region-peru.glitch.me/final_results_apu.csv", "ChartAPU");
    App.peru_cases.init();

    App.peru_cases = new DataFunction("https://rt-region-peru.glitch.me/final_results_are.csv", "ChartARE");
    App.peru_cases.init();
  }, 300);

  setTimeout(function() {
    App.peru_cases = new DataFunction("https://rt-region-peru.glitch.me/final_results_aya.csv", "ChartAYA");
    App.peru_cases.init();

    App.peru_cases = new DataFunction("https://rt-region-peru.glitch.me/final_results_caj.csv", "ChartCAJ");
    App.peru_cases.init();
  }, 600);

  setTimeout(function() {
    App.peru_cases = new DataFunction("https://rt-region-peru.glitch.me/final_results_cal.csv", "ChartCAL");
    App.peru_cases.init();

    App.peru_cases = new DataFunction("https://rt-region-peru.glitch.me/final_results_cus.csv", "ChartCUS");
    App.peru_cases.init();
  }, 900);

  setTimeout(function() {
    App.peru_cases = new DataFunction("https://rt-region-peru.glitch.me/final_results_huc.csv", "ChartHUC");
    App.peru_cases.init();

    App.peru_cases = new DataFunction("https://rt-region-peru.glitch.me/final_results_huv.csv", "ChartHUV");
    App.peru_cases.init();
  }, 1200);

  setTimeout(function() {
    App.peru_cases = new DataFunction("https://rt-region-peru.glitch.me/final_results_ica.csv", "ChartICA");
    App.peru_cases.init();

    App.peru_cases = new DataFunction("https://rt-region-peru.glitch.me/final_results_jun.csv", "ChartJUN");
    App.peru_cases.init();
  }, 1500);

  setTimeout(function() {
    App.peru_cases = new DataFunction("https://rt-region-peru.glitch.me/final_results_lal.csv", "ChartLAL");
    App.peru_cases.init();

    App.peru_cases = new DataFunction("https://rt-region-peru.glitch.me/final_results_lam.csv", "ChartLAM");
    App.peru_cases.init();
  }, 1800);

  setTimeout(function() {
    App.peru_cases = new DataFunction("https://rt-region-peru.glitch.me/final_results_lim.csv", "ChartLIM");
    App.peru_cases.init();

    App.peru_cases = new DataFunction("https://rt-region-peru.glitch.me/final_results_lor.csv", "ChartLOR");
    App.peru_cases.init();
  }, 2100);

  setTimeout(function() {
    App.peru_cases = new DataFunction("https://rt-region-peru.glitch.me/final_results_mdd.csv", "ChartMDD");
    App.peru_cases.init();

    App.peru_cases = new DataFunction("https://rt-region-peru.glitch.me/final_results_moq.csv", "ChartMOQ");
    App.peru_cases.init();
  }, 2400);

  setTimeout(function() {
    App.peru_cases = new DataFunction("https://rt-region-peru.glitch.me/final_results_pas.csv", "ChartPAS");
    App.peru_cases.init();

    App.peru_cases = new DataFunction("https://rt-region-peru.glitch.me/final_results_piu.csv", "ChartPIU");
    App.peru_cases.init();
  }, 2700);

  setTimeout(function() {
    App.peru_cases = new DataFunction("https://rt-region-peru.glitch.me/final_results_pun.csv", "ChartPUN");
    App.peru_cases.init();

    App.peru_cases = new DataFunction("https://rt-region-peru.glitch.me/final_results_sam.csv", "ChartSAM");
    App.peru_cases.init();
  }, 3000);

  setTimeout(function() {
    App.peru_cases = new DataFunction("https://rt-region-peru.glitch.me/final_results_tac.csv", "ChartTAC");
    App.peru_cases.init();

    App.peru_cases = new DataFunction("https://rt-region-peru.glitch.me/final_results_tum.csv", "ChartTUM");
    App.peru_cases.init();
  }, 3300);

  setTimeout(function() {
    App.peru_cases = new DataFunction("https://rt-region-peru.glitch.me/final_results_uca.csv", "ChartUCA");
    App.peru_cases.init();
  }, 3600);
});
