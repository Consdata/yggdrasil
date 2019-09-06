import * as am4core from '@amcharts/amcharts4/core';
import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected';
import {Injectable} from '@angular/core';

@Injectable()
export class SkillBrowserAmchartsChartBuilder {

    buildChart(nodeSelector: string, hitConsumer?: (Object) => void): am4plugins_forceDirected.ForceDirectedTree {
        const chart = am4core.create(nodeSelector, am4plugins_forceDirected.ForceDirectedTree);

        const skillsSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());
        skillsSeries.dataFields.name = 'title';
        skillsSeries.dataFields.children = 'nodes';
        skillsSeries.dataFields.linkWith = 'links';
        skillsSeries.dataFields.color = 'color';
        skillsSeries.dataFields.id = 'id';
        skillsSeries.nodes.template.togglable = false;
        skillsSeries.minRadius = am4core.percent(5);
        skillsSeries.nodes.template.label.text = '{name}';
        skillsSeries.fontSize = 14;
        skillsSeries.nodes.template.label.truncate = true;
        skillsSeries.links.template.strength = 0.5;
        skillsSeries.nodes.template.tooltipText = '{name}';
        // skillsSeries.links.template.distance = 2;
        skillsSeries.manyBodyStrength = -30;
        skillsSeries.colors.list = [am4core.color('#2980b9')];
        skillsSeries.colors.wrap = false;

        if (hitConsumer) {
            skillsSeries.nodes.template.events.on(
                'hit',
                (ev) => hitConsumer(ev.target.dataItem.dataContext)
            );
        }

        return chart;
    }

}
