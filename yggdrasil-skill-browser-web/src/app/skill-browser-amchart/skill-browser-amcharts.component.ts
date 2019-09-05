import {AfterViewInit, Component, Input, NgZone} from '@angular/core';
import {SkillTree} from '../skill-tree/skill-tree';
import * as am4core from '@amcharts/amcharts4/core';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected'


@Component({
  selector: 'yg-skill-browser-amcharts',
  template: `
    <div class="amcharts-poc-div"></div>
  `,
  styleUrls: ['./skill-browser-amcharts.component.scss']
})
export class SkillBrowserAmchartsComponent implements AfterViewInit {

  @Input() tree: SkillTree;

  constructor(private zone: NgZone) {
  }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create('amcharts-poc-div', am4plugins_forceDirected.ForceDirectedTree);
      let networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());

      chart.data = [
        {
          name: 'Core',
          children: [
            {
              name: 'First',
              children: [
                {name: 'A1', value: 100},
                {name: 'A2', value: 60}
              ]
            },
            {
              name: 'Second',
              children: [
                {name: 'B1', value: 135},
                {name: 'B2', value: 98}
              ]
            },
            {
              name: 'Third',
              children: [
                {
                  name: 'C1',
                  children: [
                    {name: 'EE1', value: 130},
                    {name: 'EE2', value: 87},
                    {name: 'EE3', value: 55}
                  ]
                },
                {name: 'C2', value: 148},
                {
                  name: 'C3', children: [
                    {name: 'CC1', value: 53},
                    {name: 'CC2', value: 30}
                  ]
                },
                {name: 'C4', value: 26}
              ]
            },
            {
              name: 'Fourth',
              children: [
                {name: 'D1', value: 415},
                {name: 'D2', value: 148},
                {name: 'D3', value: 89}
              ]
            },
            {
              name: 'Fifth',
              children: [
                {
                  name: 'E1',
                  children: [
                    {name: 'EE1', value: 33},
                    {name: 'EE2', value: 40},
                    {name: 'EE3', value: 89}
                  ]
                },
                {
                  name: 'E2',
                  value: 148
                }
              ]
            }

          ]
        }
      ];

      networkSeries.dataFields.value = 'value';
      networkSeries.dataFields.name = 'name';
      networkSeries.dataFields.children = 'children';
      networkSeries.nodes.template.tooltipText = '{name}:{value}';
      networkSeries.nodes.template.fillOpacity = 1;
      networkSeries.manyBodyStrength = -20;
      networkSeries.links.template.strength = 0.8;
      networkSeries.minRadius = am4core.percent(2);

      networkSeries.nodes.template.label.text = '{name}';
      networkSeries.fontSize = 10;


      networkSeries.nodes.template.events.on('hit', function (ev) {
        console.log('clicked on ', ev.target);
        let dataItem = ev.target.dataItem;
        networkSeries.nodes.each((node) => {
          // TODO - wyuzdany if sprawdzajacy, czy danego node'a nalezy schowac
          // if (uznamy w naszym wyuzdanym algorytmie ze tego node'a nalezy zwinac)
          //   node.setActive(false)
        });
      }, this);


    });
  }

  W
}
