define('shortcutMsOption', [], () => ([
  {
    key: 'basic-calculation',
    title: {
      'en': 'Basic calculation',
      'zh-CN': '算术运算',
      'zh-TW': '基礎計算',
      'zh': '算术运算',
      'en-US': 'Mathematical operations',
    },
    children: [
      {
        key: 'plus',
        title: {
          'en': 'Addition',
          'zh-CN': '相加',
          'zh-TW': '相加',
          'zh': '相加',
          'en-US': 'Addition',
        },
        desc: {
          'en': `<p><strong>Description:</strong><br> The Addition calculation measure involves a simple addition operation on two or more measures, resulting in their sum.</p>
<p><strong>Example:</strong><br> <code>[Measures].[Net Sales] = [Measures].[Sales Amount] + [Measures].[Returns Amount]</code></p>`,
          'zh-CN': `<p><strong>描述：</strong><br> 通过对两个或多个度量执行简单的加法操作，得到它们的总和。</p>
<p><strong>示例：</strong><br> <code>[Measures].[Net Sales] = [Measures].[Sales Amount] + [Measures].[Returns Amount]</code></p></p>`,
          'zh-TW': '<p>123。</p>',
          'zh': `<p><strong>描述：</strong><br> 通过对两个或多个度量执行简单的加法操作，得到它们的总和。</p>
<p><strong>示例：</strong><br> <code>[Measures].[Net Sales] = [Measures].[Sales Amount] + [Measures].[Returns Amount]</code></p>
`,
          'en-US': `<p><strong>Description:</strong><br> The Addition calculation measure involves a simple addition operation on two or more measures, resulting in their sum.</p>
<p><strong>Example:</strong><br> <code>[Measures].[Net Sales] = [Measures].[Sales Amount] + [Measures].[Returns Amount]</code></p>`,
        },
        template: '{{measures}}',
        params: [
          {
            name: 'measures',
            title: {
              'en': 'Measures',
              'zh-CN': '度量',
              'zh-TW': '度量',
              'zh': '度量',
              'en-US': 'Measures',
            },
            desc: {
              'en': 'Select two or more measures for addition.',
              'zh-CN': '请选择2个以上度量进行相加运算',
              'zh-TW': '请选择2个以上度量进行相加运算',
              'zh': '选择2个以上度量进行相加运算',
              'en-US': 'Select two or more measures for addition.',
            },
            type: 'PlusMeasureSelector',
          },
        ],
      },
      {
        key: 'minus',
        title: {
          'en': 'Subtraction',
          'zh-CN': '相减',
          'zh-TW': '相减',
          'zh': '相减',
          'en-US': 'Subtraction',
        },
        desc: {
          'en': `<p><strong>Description:</strong><br> The Subtraction calculation measure involves subtracting one measure from another to obtain the difference.</p>
<p><strong>Example:</strong><br> <code>[Measures].[Net Profit] = [Measures].[Revenue] - [Measures].[Expenses]</code></p>`,
          'zh-CN': `<p><strong>描述：</strong><br> 相减计算度量通过从一个度量中减去另一个度量，得到它们的差异。</p>
<p><strong>示例：</strong><br> <code>[Measures].[净利润] = [Measures].[营收] - [Measures].[费用]</code></p>`,
          'zh-TW': `<p><strong>描述：</strong><br> 相减计算度量通过从一个度量中减去另一个度量，得到它们的差异。</p>
<p><strong>示例：</strong><br> <code>[Measures].[净利润] = [Measures].[营收] - [Measures].[费用]</code></p>`,
          'zh': `<p><strong>描述：</strong><br> 相减计算度量通过从一个度量中减去另一个度量，得到它们的差异。</p>
<p><strong>示例：</strong><br> <code>[Measures].[净利润] = [Measures].[营收] - [Measures].[费用]</code></p>`,
          'en-US': `<p><strong>Description:</strong><br> The Subtraction calculation measure involves subtracting one measure from another to obtain the difference.</p>
<p><strong>Example:</strong><br> <code>[Measures].[Net Profit] = [Measures].[Revenue] - [Measures].[Expenses]</code></p>`,
        },
        template: '{{a}} - {{b}}',
        params: [
          {
            name: 'a',
            title: {
              'en': 'Base value',
              'zh-CN': '被减数',
              'zh-TW': '被减数',
              'zh': '被减数',
              'en-US': 'Base value',
            },
            desc: {
              'en': 'The base value for the operation.',
              'zh-CN': '作为被减数的度量',
              'zh-TW': '作为被减数的度量',
              'zh': '作为被减数的度量',
              'en-US': 'The base value for the operation.',
            },
            type: 'MeasureSelector',
          },
          {
            name: 'b',
            title: {
              'en': 'Value to subtract',
              'zh-CN': '减数',
              'zh-TW': '減數',
              'zh': '减数',
              'en-US': 'Value to subtract',
            },
            desc: {
              'en': 'The value you want to subtract from the base value',
              'zh-CN': '作为减数的度量',
              'zh-TW': '作为减数的度量',
              'zh': '作为减数的度量',
              'en-US': 'The value you want to subtract from the base value',
            },
            type: 'MeasureSelector',
          },
        ],
      },
      {
        key: 'multiply',
        title: {
          'en': 'Multiplication',
          'zh-CN': '相乘',
          'zh-TW': '相乘',
          'zh': '相乘',
          'en-US': 'Multiplication',
        },
        desc: {
          'en': `<p><strong>Description:</strong><br> The Multiplication calculation measure involves multiplying two or more measures to obtain their product.</p>
<p><strong>Example:</strong><br> <code>[Measures].[Total Sales] = [Measures].[Quantity] * [Measures].[Unit Price]</code></p>`,
          'zh-CN': `<p><strong>描述：</strong><br> 相乘计算度量通过将两个或多个度量相乘，得到它们的乘积。</p>
<p><strong>示例：</strong><br> <code>[Measures].[总销售额] = [Measures].[数量] * [Measures].[单价]</code></p>`,
          'zh-TW': `<p><strong>描述：</strong><br> 相乘计算度量通过将两个或多个度量相乘，得到它们的乘积。</p>
<p><strong>示例：</strong><br> <code>[Measures].[总销售额] = [Measures].[数量] * [Measures].[单价]</code></p>`,
          'zh': `<p><strong>描述：</strong><br> 相乘计算度量通过将两个或多个度量相乘，得到它们的乘积。</p>
<p><strong>示例：</strong><br> <code>[Measures].[总销售额] = [Measures].[数量] * [Measures].[单价]</code></p>`,
          'en-US': `<p><strong>Description:</strong><br> The Multiplication calculation measure involves multiplying two or more measures to obtain their product.</p>
<p><strong>Example:</strong><br> <code>[Measures].[Total Sales] = [Measures].[Quantity] * [Measures].[Unit Price]</code></p>`,
        },
        template: '{{measures}}',
        params: [
          {
            name: 'measures',
            title: {
              'en': 'Measures',
              'zh-CN': '度量',
              'zh-TW': '度量',
              'zh': '度量',
              'en-US': 'Measures',
            },
            desc: {
              'en': 'Please select two or more metrics for multiplication operation.',
              'zh-CN': '请选择2个以上度量进行乘积运算',
              'zh-TW': '请选择2个以上度量进行乘积运算',
              'zh': '请选择2个以上度量进行乘积运算',
              'en-US': 'Please select two or more metrics for multiplication operation.',
            },
            type: 'MultiplyMeasureSelector',
          },
        ],
      },
      {
        key: 'divide',
        title: {
          'en': 'Division',
          'zh-CN': '相除',
          'zh-TW': '相除',
          'zh': '相除',
          'en-US': 'Division',
        },
        desc: {
          'en': `<p><strong>Description:</strong><br> The Division calculation measure involves dividing one measure by another to obtain the quotient.</p>
<p><strong>Example:</strong><br> <code>[Measures].[Profit Margin] = [Measures].[Net Profit] / [Measures].[Revenue]</code></p>`,
          'zh-CN': `<p><strong>描述：</strong><br> 相除计算度量通过将一个度量除以另一个度量，得到它们的商。</p>
<p><strong>示例：</strong><br> <code>[Measures].[利润率] = [Measures].[净利润] / [Measures].[营收]</code></p`,
          'zh-TW': `<p><strong>描述：</strong><br> 相除计算度量通过将一个度量除以另一个度量，得到它们的商。</p>
<p><strong>示例：</strong><br> <code>[Measures].[利润率] = [Measures].[净利润] / [Measures].[营收]</code></p`,
          'zh': `<p><strong>描述：</strong><br> 相除计算度量通过将一个度量除以另一个度量，得到它们的商。</p>
<p><strong>示例：</strong><br> <code>[Measures].[利润率] = [Measures].[净利润] / [Measures].[营收]</code></p`,
          'en-US': `<p><strong>Description:</strong><br> The Division calculation measure involves dividing one measure by another to obtain the quotient.</p>
<p><strong>Example:</strong><br> <code>[Measures].[Profit Margin] = [Measures].[Net Profit] / [Measures].[Revenue]</code></p>`,
        },
        template: '{{dividend}} / {{divisor}}',
        params: [
          {
            name: 'dividend',
            title: {
              'en': 'Numerator',
              'zh-CN': '被除数',
              'zh-TW': '被除数',
              'zh': '被除数',
              'en-US': 'Numerator',
            },
            desc: {
              'en': 'The value you want divide',
              'zh-CN': '选择被除数度量',
              'zh-TW': '选择被除数度量',
              'zh': '选择被除数度量',
              'en-US': 'The value you want divide',
            },
            type: 'MeasureSelector',
          },
          {
            name: 'divisor',
            title: {
              'en': 'Denominator',
              'zh-CN': '除数',
              'zh-TW': '除數',
              'zh': '除数',
              'en-US': 'Denominator',
            },
            desc: {
              'en': 'The value you want to divide by',
              'zh-CN': '选择除数度量',
              'zh-TW': '选择除数度量',
              'zh': '选择除数度量',
              'en-US': 'The value you want to divide by',
            },
            type: 'MeasureSelector',
          },
        ],
      },
    ],
  },
  {
    key: 'same-period-type',
    title: {
      'en': 'Comparable period value',
      'zh-CN': '同期值',
      'zh-TW': '同期值',
      'zh': '同期值',
      'en-US': 'Comparable period value',
    },
    children: [
      {
        key: 'same-period-last-year',
        title: {
          'en': 'Yearly comparable period value',
          'zh-CN': '年度同期值',
          'zh-TW': '年度同期值',
          'zh': '年度同期值',
          'en-US': 'Yearly comparable period value',
        },
        desc: {
          'en': `<p><strong>Description:</strong><br> The yearly comparable period calculation measure represents the sum of a specified measure for the designated year.</p>
<p><strong>Example:</strong><br> <code>Sum(FilteredParallelPeriod([Time Dimension].[Year Hierarchy], -1, "yyyy"), [Measures].[Sales Quantity])</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is from 2023 to 2024, the calculated value of the measure is the sum of sales quantity from 2022 to 2024.</p>`,
          'zh-CN': `<p><strong>描述：</strong><br> 年度同期值计算度量表示指定年份的度量的汇总。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredParallelPeriod([时间维度].[年份层级], -1, "yyyy"), [Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年到2024年，计算度量的值是2022年到2024年的销售数量的汇总。</p>`,
          'zh': `<p><strong>描述：</strong><br> 年度同期值计算度量表示指定年份的度量的汇总。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredParallelPeriod([时间维度].[年份层级], -1, "yyyy"), [Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年到2024年，计算度量的值是2022年到2024年的销售数量的汇总。</p>`,
          'en-US':`<p><strong>Description:</strong><br> The yearly comparable period calculation measure represents the sum of a specified measure for the designated year.</p>
<p><strong>Example:</strong><br> <code>Sum(FilteredParallelPeriod([Time Dimension].[Year Hierarchy], -1, "yyyy"), [Measures].[Sales Quantity])</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is from 2023 to 2024, the calculated value of the measure is the sum of sales quantity from 2022 to 2024.</p>`,
        },
        template: `Sum(
          FilteredParallelPeriod({{hierarchy}},{{count}},"yyyy"), 
          {{measure}}
        )`,
        params: [
          {
            name: 'hierarchy',
            title: {
              'en': 'Time hierarchy',
              'zh-CN': '时间层次',
              'zh-TW': '时间层次',
              'zh': '时间层次',
              'en-US': 'Time hierarchy',
            },
            desc: {
              'en': 'Time hierarchy used for comparison',
              'zh-CN': '比较年份所用的时间层次',
              'zh-TW': '比较年份所用的时间层次',
              'zh': '比较所用的时间层次',
              'en-US': 'Time hierarchy used for comparison',
            },
            type: 'TimeHierarchySelector',
          },
          {
            name: 'measure',
            title: {
              'en': 'Measure',
              'zh-CN': '度量',
              'zh-TW': '度量',
              'zh': '度量',
              'en-US': 'Measure',
            },
            desc: {
              'en': 'Measure to be calculated',
              'zh-CN': '所要计算的度量',
              'zh-TW': '所要计算的度量',
              'zh': '所要计算的度量',
              'en-US': 'Measure to be calculated',
            },
            type: 'MeasureSelector',
          },
          {
            name: 'count',
            title: {
              'en': 'Number of Years',
              'zh-CN': '年份数量',
              'zh-TW': '年份数量',
              'zh': '年份数量',
              'en-US': 'Number of Years',
            },
            desc: {
              'en': 'The number of past years over which to calculate the value',
              'zh-CN': '计算该值所需的过去的年份数量',
              'zh-TW': '计算该值所需的过去的年份数量',
              'zh': '计算该值所需的过去的年份数量',
              'en-US': 'The number of past years over which to calculate the value',
            },
            type: 'ReverseNumericInput',
            init: 1
          }
        ],
      },
      {
        key: 'same-period-last-quarter',
        title: {
          'en': 'Quarterly comparable period value',
          'zh-CN': '季度同期值',
          'zh-TW': '季度同期值',
          'zh': '季度同期值',
          'en-US': 'Quarterly comparable period value',
        },
        desc: {
          'en': `<p><strong>Description:</strong><br> The quarterly comparable period calculation measure represents the sum of a specified measure for the designated quarter.</p>
<p><strong>Example:</strong><br> <code>Sum(FilteredParallelPeriod([Time Dimension].[Year Hierarchy], -1, "q"), [Measures].[Sales Quantity])</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is from the 3rd quarter of 2023 to the 4th quarter of 2023, the calculated value of the measure is the sum of sales quantity from the 2nd quarter of 2023 to the 3rd quarter of 2023.</p>`,
          'zh-CN': `<p><strong>描述：</strong><br> 季度同期值计算度量表示指定季度的度量的汇总。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredParallelPeriod([时间维度].[年份层级], -1, "q"), [Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br>如果作用在此计算度量的时间筛选是2023年3季度到2023年4季度，计算度量的值是2023年2季度到2023年3季度的销售数量的汇总。</p>`,
          'zh-TW': `<p><strong>描述：</strong><br> 季度同期值计算度量表示指定季度的度量的汇总。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredParallelPeriod([时间维度].[年份层级], -1, "q"), [Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br>如果作用在此计算度量的时间筛选是2023年3季度到2023年4季度，计算度量的值是2023年2季度到2023年3季度的销售数量的汇总。</p>`,
          'zh': `<p><strong>描述：</strong><br> 季度同期值计算度量表示指定季度的度量的汇总。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredParallelPeriod([时间维度].[年份层级], -1, "q"), [Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br>如果作用在此计算度量的时间筛选是2023年3季度到2023年4季度，计算度量的值是2023年2季度到2023年3季度的销售数量的汇总。</p>`,
          'en-US': `<p><strong>Description:</strong><br> The quarterly comparable period calculation measure represents the sum of a specified measure for the designated quarter.</p>
<p><strong>Example:</strong><br> <code>Sum(FilteredParallelPeriod([Time Dimension].[Year Hierarchy], -1, "q"), [Measures].[Sales Quantity])</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is from the 3rd quarter of 2023 to the 4th quarter of 2023, the calculated value of the measure is the sum of sales quantity from the 2nd quarter of 2023 to the 3rd quarter of 2023.</p>`,
        },
        template: `Sum(
          FilteredParallelPeriod({{hierarchy}},{{count}},"q"), 
          {{measure}}
        )`,
        params: [
          {
            name: 'hierarchy',
            title: {
              'en': 'Time hierarchy',
              'zh-CN': '时间层次',
              'zh-TW': '时间层次',
              'zh': '时间层次',
              'en-US': 'Time hierarchy',
            },
            desc: {
              'en': 'Time hierarchy used for comparison',
              'zh-CN': '比较所用的时间层次',
              'zh-TW': '比较所用的时间层次',
              'zh': '比较所用的时间层次',
              'en-US': 'Time hierarchy used for comparison',
            },
            type: 'TimeHierarchySelector',
          },
          {
            name: 'measure',
            title: {
              'en': 'Measure',
              'zh-CN': '度量',
              'zh-TW': '度量',
              'zh': '度量',
              'en-US': 'Measure',
            },
            desc: {
              'en': 'Measure to be calculated',
              'zh-CN': '所要计算的度量',
              'zh-TW': '所要计算的度量',
              'zh': '所要计算的度量',
              'en-US': 'Measure to be calculated',
            },
            type: 'MeasureSelector',
          },
          {
            name: 'count',
            title: {
              'en': 'Number of quarters',
              'zh-CN': '季度数量',
              'zh-TW': '季度数量',
              'zh': '季度数量',
              'en-US': 'Number of quarters',
            },
            desc: {
              'en': 'The number of past quarters over which to calculate the value',
              'zh-CN': '计算该值所需的过去的季度数量',
              'zh-TW': '计算该值所需的过去的季度数量',
              'zh': '计算该值所需的过去的季度数量',
              'en-US': 'The number of past quarters over which to calculate the value',
            },
            type: 'ReverseNumericInput',
            init: 1
          }
        ],
      },
      {
        key: 'same-period-last-month',
        title: {
          'en': 'Monthly comparable period value',
          'zh-CN': '月份同期值',
          'zh-TW': '月份同期值',
          'zh': '月份同期值',
          'en-US': 'Monthly comparable period value',
        },
        desc: {
          'en': `<p><strong>Description:</strong><br> The quarterly comparable period calculation measure represents the sum of a specified measure for the designated month.</p>
<p><strong>Example:</strong><br> <code>Sum(FilteredParallelPeriod([Time Dimension].[Year Hierarchy], -1, "m"), [Measures].[Sales Quantity])</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is from March 2023 to April 2023, the calculated value of the measure is the sum of sales quantity from February 2023 to March 2023.</p>`,
          'zh-CN': `<p><strong>描述：</strong><br> 月份同期值计算度量表示指定月份的度量的汇总。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredParallelPeriod([时间维度].[年份层级], -1, "m"), [Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年3月到2023年4月，计算度量的值是2023年2月到2023年3月的销售数量的汇总。</p>`,
          'zh-TW': `<p><strong>描述：</strong><br> 月份同期值计算度量表示指定月份的度量的汇总。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredParallelPeriod([时间维度].[年份层级], -1, "m"), [Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年3月到2023年4月，计算度量的值是2023年2月到2023年3月的销售数量的汇总。</p>`,
          'zh': `<p><strong>描述：</strong><br> 月份同期值计算度量表示指定月份的度量的汇总。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredParallelPeriod([时间维度].[年份层级], -1, "m"), [Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年3月到2023年4月，计算度量的值是2023年2月到2023年3月的销售数量的汇总。</p>`,
          'en-US': `<p><strong>Description:</strong><br> The quarterly comparable period calculation measure represents the sum of a specified measure for the designated month.</p>
<p><strong>Example:</strong><br> <code>Sum(FilteredParallelPeriod([Time Dimension].[Year Hierarchy], -1, "m"), [Measures].[Sales Quantity])</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is from March 2023 to April 2023, the calculated value of the measure is the sum of sales quantity from February 2023 to March 2023.</p>`,
        },
        template: `Sum(
          FilteredParallelPeriod({{hierarchy}},{{count}},"m"), 
          {{measure}}
        )`,
        params: [
          {
            name: 'hierarchy',
            title: {
              'en': 'Time hierarchy',
              'zh-CN': '时间层次',
              'zh-TW': '时间层次',
              'zh': '时间层次',
              'en-US': 'Time hierarchy',
            },
            desc: {
              'en': 'Time hierarchy used for comparison',
              'zh-CN': '比较所用的时间层次',
              'zh-TW': '比较所用的时间层次',
              'zh': '比较所用的时间层次',
              'en-US': 'Time hierarchy used for comparison',
            },
            type: 'TimeHierarchySelector',
          },
          {
            name: 'measure',
            title: {
              'en': 'Measure',
              'zh-CN': '度量',
              'zh-TW': '度量',
              'zh': '度量',
              'en-US': 'Measure',
            },
            desc: {
              'en': 'Measure to be calculated',
              'zh-CN': '所要计算的度量',
              'zh-TW': '所要计算的度量',
              'zh': '所要计算的度量',
              'en-US': 'Measure to be calculated',
            },
            type: 'MeasureSelector',
          },
          {
            name: 'count',
            title: {
              'en': 'Number of months',
              'zh-CN': '月份数量',
              'zh-TW': '月份数量',
              'zh': '月份数量',
              'en-US': 'Number of months',
            },
            desc: {
              'en': 'The number of past months over which to calculate the value',
              'zh-CN': '计算该值所需的过去的月份数量',
              'zh-TW': '计算该值所需的过去的月份数量',
              'zh': '计算该值所需的过去的月份数量',
              'en-US': 'The number of past months over which to calculate the value',
            },
            type: 'ReverseNumericInput',
            init: 1
          }
        ],
      },
      {
        key: 'same-period-last-week',
        title: {
          'en': 'Weekly comparable period value',
          'zh-CN': '周同期值',
          'zh-TW': '周同期值',
          'zh': '周同期值',
          'en-US': 'Weekly comparable period value',
        },
        desc: {
          'en': `<p><strong>Description:</strong><br> The quarterly comparable period calculation measure represents the sum of a specified measure for the designated week.</p>
<p><strong>Example:</strong><br> <code>Sum(FilteredParallelPeriod([Time Dimension].[Year Hierarchy], -1, "ww"), [Measures].[Sales Quantity])</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is from the 3rd week of 2023 to the 4th week of 2023, the calculated value of the measure is the sum of sales quantity from the 2nd week of 2023 to the 3rd week of 2023.</p>`,
          'zh-CN': `<p><strong>描述：</strong><br> 周同期值计算度量表示指定周的度量的汇总。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredParallelPeriod([时间维度].[年份层级], -1, "ww"), [Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年第3周到2023年第4周，计算度量的值是2023年第2周到2023年第3周的销售数量的汇总。</p>`,
          'zh-TW': `<p><strong>描述：</strong><br> 周同期值计算度量表示指定周的度量的汇总。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredParallelPeriod([时间维度].[年份层级], -1, "ww"), [Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年第3周到2023年第4周，计算度量的值是2023年第2周到2023年第3周的销售数量的汇总。</p>`,
          'zh': `<p><strong>描述：</strong><br> 周同期值计算度量表示指定周的度量的汇总。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredParallelPeriod([时间维度].[年份层级], -1, "ww"), [Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年第3周到2023年第4周，计算度量的值是2023年第2周到2023年第3周的销售数量的汇总。</p>`,
          'en-US': `<p><strong>Description:</strong><br> The quarterly comparable period calculation measure represents the sum of a specified measure for the designated week.</p>
<p><strong>Example:</strong><br> <code>Sum(FilteredParallelPeriod([Time Dimension].[Year Hierarchy], -1, "ww"), [Measures].[Sales Quantity])</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is from the 3rd week of 2023 to the 4th week of 2023, the calculated value of the measure is the sum of sales quantity from the 2nd week of 2023 to the 3rd week of 2023.</p>`,
        },
        template: `Sum(
          FilteredParallelPeriod({{hierarchy}},{{count}},"ww"), 
          {{measure}}
        )`,
        params: [
          {
            name: 'hierarchy',
            title: {
              'en': 'Time hierarchy',
              'zh-CN': '时间层次',
              'zh-TW': '时间层次',
              'zh': '时间层次',
              'en-US': 'Time hierarchy',
            },
            desc: {
              'en': 'Time hierarchy used for comparison',
              'zh-CN': '比较所用的时间层次',
              'zh-TW': '比较所用的时间层次',
              'zh': '比较所用的时间层次',
              'en-US': 'Time hierarchy used for comparison',
            },
            type: 'TimeHierarchySelector',
          },
          {
            name: 'measure',
            title: {
              'en': 'Measure',
              'zh-CN': '度量',
              'zh-TW': '度量',
              'zh': '度量',
              'en-US': 'Measure',
            },
            desc: {
              'en': 'Measure to be calculated',
              'zh-CN': '所要计算的度量',
              'zh-TW': '所要计算的度量',
              'zh': '所要计算的度量',
              'en-US': 'Measure to be calculated',
            },
            type: 'MeasureSelector',
          },
          {
            name: 'count',
            title: {
              'en': 'Number of weeks',
              'zh-CN': '周数量',
              'zh-TW': '周数量',
              'zh': '周数量',
              'en-US': 'Number of weeks',
            },
            desc: {
              'en': 'The number of past weeks over which to calculate the value',
              'zh-CN': '计算该值所需的过去的周数量',
              'zh-TW': '计算该值所需的过去的周数量',
              'zh': '计算该值所需的过去的周数量',
              'en-US': 'The number of past weeks over which to calculate the value',
            },
            type: 'ReverseNumericInput',
            init: 1
          }
        ],
      },
      {
        key: 'chain-relative-value',
        title: {
          'en': 'Sequential comparable value',
          'zh-CN': '环比值',
          'zh-TW': '环比值',
          'zh': '环比值',
          'en-US': 'Sequential comparable value',
        },
        desc: {
          'en': `<p><strong>Description:</strong><br> Sequential comparable value refers to the aggregated value of a specified measure over consecutive periods.</p>
<p><strong>Example:</strong><br> <code>Sum(FilteredLoopPeriod([Time Dimension].[Time Hierarchy], -1), [Measures].[Sales Quantity])</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is from May 2023 to July 2023, the calculated value of the measure is the sum of sales quantity from February 2023 to April 2023.</p>`,
          'zh-CN': `<p><strong>描述：</strong><br> 环比值是指相邻期间内的指定度量的汇总值。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredLoopPeriod([时间维度].[时间层次], -1),[Measures].[销售数量]])</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年5月到2023年7月，计算度量的值是2023年2月到2023年4月的销售数量的汇总。</p>`,
          'zh-TW': `<p><strong>描述：</strong><br> 环比值是指相邻期间内的指定度量的汇总值。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredLoopPeriod([时间维度].[时间层次], -1),[Measures].[销售数量]])</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年5月到2023年7月，计算度量的值是2023年2月到2023年4月的销售数量的汇总。</p>`,
          'zh': `<p><strong>描述：</strong><br> 环比值是指相邻期间内的指定度量的汇总值。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredLoopPeriod([时间维度].[时间层次], -1),[Measures].[销售数量]])</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年5月到2023年7月，计算度量的值是2023年2月到2023年4月的销售数量的汇总。</p>`,
          'en-US': `<p><strong>Description:</strong><br> Sequential comparable value refers to the aggregated value of a specified measure over consecutive periods.</p>
<p><strong>Example:</strong><br> <code>Sum(FilteredLoopPeriod([Time Dimension].[Time Hierarchy], -1), [Measures].[Sales Quantity])</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is from May 2023 to July 2023, the calculated value of the measure is the sum of sales quantity from February 2023 to April 2023.</p>`,
        },
        template: `Sum(
          FilteredLoopPeriod({{hierarchy}},{{count}}), 
          {{measure}}
        )`,
        params: [
          {
            name: 'hierarchy',
            title: {
              'en': 'Time hierarchy',
              'zh-CN': '时间层次',
              'zh-TW': '时间层次',
              'zh': '时间层次',
              'en-US': 'Time hierarchy',
            },
            desc: {
              'en': 'Time hierarchy used for comparison',
              'zh-CN': '比较所用的时间层次',
              'zh-TW': '比较所用的时间层次',
              'zh': '比较所用的时间层次',
              'en-US': 'Time hierarchy used for comparison',
            },
            type: 'TimeHierarchySelector',
          },
          {
            name: 'measure',
            title: {
              'en': 'Measure',
              'zh-CN': '度量',
              'zh-TW': '度量',
              'zh': '度量',
              'en-US': 'Measure',
            },
            desc: {
              'en': 'Measure to be calculated',
              'zh-CN': '所要计算的度量',
              'zh-TW': '所要计算的度量',
              'zh': '所要计算的度量',
              'en-US': 'Measure to be calculated',
            },
            type: 'MeasureSelector',
          },
          {
            name: 'count',
            title: {
              'en': 'Number of periods',
              'zh-CN': '周期个数',
              'zh-TW': '週期個數',
              'zh': '周期个数',
              'en-US': 'Number of periods',
            },
            desc: {
              'en': 'The number of past periods over which to calculate the value',
              'zh-CN': '计算该值所需的过去的周期数量',
              'zh-TW': '计算该值所需的过去的周期数量',
              'zh': '计算该值所需的过去的周期数量',
              'en-US': 'The number of past periods over which to calculate the value',
            },
            type: 'ReverseNumericInput',
            init: 1
          }
        ],
      }
    ],
  },
  {
    key: 'period-ratio-type',
    title: {
      'en': 'Period-over-period change rate',
      'zh-CN': '同比变化率',
      'zh-TW': '同比变化率',
      'zh': '同比变化率',
      'en-US': 'Period-over-period change rate',
    },
    children: [{
      key: 'year_over_year',
      title: {
        'en': 'Year-over-year change rate',
        'zh-CN': '年同比变化率',
        'zh-TW': '年同比变化率',
        'zh': '年同比变化率',
        'en-US': 'Year-over-year change rate',
      },
      desc: {
        'en': `<p><strong>Description:</strong><br> Year-over-year change rate refers to the percentage variation between the current year's measure value and the measure value for the specified year.</p>
<p><strong>Example:</strong><br> <code>[Measures].[Sales Quantity] / Sum(FilteredParallelPeriod([Time Dimension].[Time Hierarchy], -1, "yyyy"), [Measures].[Sales Quantity]) - 1</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is for the year 2023, the calculated value of the measure represents the percentage change in sales quantity between the year 2023 and the year 2022.</p>`,
        'zh-CN': `<p><strong>描述：</strong><br> 年同比变化率是指当前年度的度量值与指定年度的度量值之间的百分比变化。</p>
<p><strong>示例：</strong><br> <code>[Measures].[销售数量] / Sum(FilteredParallelPeriod([时间维度].[时间层次], -1, "yyyy"), [Measures].[销售数量]) -1</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年，计算度量的值是2023年的销售数量汇总值和2022年的销售数量的百分比变化。</p>`,
        'zh-TW': `<p><strong>描述：</strong><br> 年同比变化率是指当前年度的度量值与指定年度的度量值之间的百分比变化。</p>
<p><strong>示例：</strong><br> <code>[Measures].[销售数量] / Sum(FilteredParallelPeriod([时间维度].[时间层次], -1, "yyyy"), [Measures].[销售数量]) -1</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年，计算度量的值是2023年的销售数量汇总值和2022年的销售数量的百分比变化。</p>`,
        'zh': `<p><strong>描述：</strong><br> 年同比变化率是指当前年度的度量值与指定年度的度量值之间的百分比变化。</p>
<p><strong>示例：</strong><br> <code>[Measures].[销售数量] / Sum(FilteredParallelPeriod([时间维度].[时间层次], -1, "yyyy"), [Measures].[销售数量]) -1</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年，计算度量的值是2023年的销售数量汇总值和2022年的销售数量的百分比变化。</p>`,
        'en-US': `<p><strong>Description:</strong><br> Year-over-year change rate refers to the percentage variation between the current year's measure value and the measure value for the specified year.</p>
<p><strong>Example:</strong><br> <code>[Measures].[Sales Quantity] / Sum(FilteredParallelPeriod([Time Dimension].[Time Hierarchy], -1, "yyyy"), [Measures].[Sales Quantity]) - 1</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is for the year 2023, the calculated value of the measure represents the percentage change in sales quantity between the year 2023 and the year 2022.</p>`,
      },
      template: `(
        {{measure}}
        /
        Sum(
          FilteredParallelPeriod({{hierarchy}},{{count}},"yyyy"), 
          {{measure}}
        )
        -1
      )`,
      params: [
        {
          name: 'hierarchy',
          title: {
            'en': 'Time hierarchy',
            'zh-CN': '时间层次',
            'zh-TW': '时间层次',
            'zh': '时间层次',
            'en-US': 'Time hierarchy',
          },
          desc: {
            'en': 'Time hierarchy',
            'zh-CN': '时间层次',
            'zh-TW': '时间层次',
            'zh': '时间层次',
            'en-US': 'Time hierarchy',
          },
          type: 'TimeHierarchySelector',
        },
        {
          name: 'measure',
          title: {
            'en': 'Measure',
            'zh-CN': '度量',
            'zh-TW': '度量',
            'zh': '度量',
            'en-US': 'Measure',
          },
          desc: {
            'en': 'Measure',
            'zh-CN': '度量',
            'zh-TW': '度量',
            'zh': '度量',
            'en-US': 'Measure',
          },
          type: 'MeasureSelector',
        },
        {
          name: 'count',
          title: {
            'en': 'Number of periods',
            'zh-CN': '周期个数',
            'zh-TW': '週期個數',
            'zh': '周期个数',
            'en-US': 'Number of periods',
          },
          desc: {
            'en': 'The number of past years over which to calculate the value',
            'zh-CN': '计算该值所需的过去的年份数量',
            'zh-TW': '计算该值所需的过去的年份数量',
            'zh': '计算该值所需的过去的年份数量',
            'en-US': 'The number of past years over which to calculate the value',
          },
          type: 'ReverseNumericInput',
          init: 1
        }
      ],
    },
    {
      key: 'quarter-over-quarter',
      title: {
        'en': 'Quarter-over-quarter change rate',
        'zh-CN': '季度同比变化率',
        'zh-TW': '季度同比变化率',
        'zh': '季度同比变化率',
        'en-US': 'Quarter-over-quarter change rate',
      },
      desc: {
        'en': `<p><strong>Description:</strong><br> Quarter-over-quarter change rate refers to the percentage variation between the current quarter's measure value and the measure value for the specified quarter.</p>
<p><strong>Example:</strong><br> <code>[Measures].[Sales Quantity] / Sum(FilteredParallelPeriod([Time Dimension].[Time Hierarchy], -1, "q"), [Measures].[Sales Quantity]) - 1</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is for the 3rd quarter of 2023, the calculated value of the measure represents the percentage change in sales quantity between the 3rd quarter of 2023 and the 2nd quarter of 2023.</p>`,
        'zh-CN': `<p><strong>描述：</strong><br> 季度同比变化率是指当前季度的度量值与指定季度的度量值之间的百分比变化。</p>
<p><strong>示例：</strong><br> <code>[Measures].[销售数量] / Sum(FilteredParallelPeriod([时间维度].[时间层次], -1, "q"), [Measures].[销售数量]) -1</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年3季度，计算度量的值是2023年3季度的销售数量汇总值和2023年2季度的销售数量的百分比变化。</p>`,
        'zh-TW': `<p><strong>描述：</strong><br> 季度同比变化率是指当前季度的度量值与指定季度的度量值之间的百分比变化。</p>
<p><strong>示例：</strong><br> <code>[Measures].[销售数量] / Sum(FilteredParallelPeriod([时间维度].[时间层次], -1, "q"), [Measures].[销售数量]) -1</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年3季度，计算度量的值是2023年3季度的销售数量汇总值和2023年2季度的销售数量的百分比变化。</p>`,
        'zh': `<p><strong>描述：</strong><br> 季度同比变化率是指当前季度的度量值与指定季度的度量值之间的百分比变化。</p>
<p><strong>示例：</strong><br> <code>[Measures].[销售数量] / Sum(FilteredParallelPeriod([时间维度].[时间层次], -1, "q"), [Measures].[销售数量]) -1</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年3季度，计算度量的值是2023年3季度的销售数量汇总值和2023年2季度的销售数量的百分比变化。</p>`,
        'en-US': `<p><strong>Description:</strong><br> Quarter-over-quarter change rate refers to the percentage variation between the current quarter's measure value and the measure value for the specified quarter.</p>
<p><strong>Example:</strong><br> <code>[Measures].[Sales Quantity] / Sum(FilteredParallelPeriod([Time Dimension].[Time Hierarchy], -1, "q"), [Measures].[Sales Quantity]) - 1</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is for the 3rd quarter of 2023, the calculated value of the measure represents the percentage change in sales quantity between the 3rd quarter of 2023 and the 2nd quarter of 2023.</p>`,
      },
      template: `(
        {{measure}}
        /
        Sum(
          FilteredParallelPeriod({{hierarchy}},{{count}},"q"), 
          {{measure}}
        )
        -1       
      )`,
      params: [
        {
          name: 'hierarchy',
          title: {
            'en': 'Time hierarchy',
            'zh-CN': '时间层次',
            'zh-TW': '时间层次',
            'zh': '时间层次',
            'en-US': 'Time hierarchy',
          },
          desc: {
            'en': 'Time hierarchy',
            'zh-CN': '时间层次',
            'zh-TW': '时间层次',
            'zh': '时间层次',
            'en-US': 'Time hierarchy',
          },
          type: 'TimeHierarchySelector',
        },
        {
          name: 'measure',
          title: {
            'en': 'Measure',
            'zh-CN': '度量',
            'zh-TW': '度量',
            'zh': '度量',
            'en-US': 'Measure',
          },
          desc: {
            'en': 'Measure',
            'zh-CN': '度量',
            'zh-TW': '度量',
            'zh': '度量',
            'en-US': 'Measure',
          },
          type: 'MeasureSelector',
        },
        {
          name: 'count',
          title: {
            'en': 'Number of periods',
            'zh-CN': '周期个数',
            'zh-TW': '週期個數',
            'zh': '周期个数',
            'en-US': 'Number of periods',
          },
          desc: {
            'en': 'The number of past quarters over which to calculate the value',
            'zh-CN': '计算该值所需的过去的季度数量',
            'zh-TW': '计算该值所需的过去的季度数量',
            'zh': '计算该值所需的过去的季度数量',
            'en-US': 'The number of past quarters over which to calculate the value',
          },
          type: 'ReverseNumericInput',
          init: 1
        }
      ],
    },
    {
      key: 'month-over-month',
      title: {
        'en': 'Month-over-month change rate',
        'zh-CN': '月度同比变化率',
        'zh-TW': '月度同比变化率',
        'zh': '月度同比变化率',
        'en-US': 'Month-over-month change rate',
      },
      desc: {
        'en': `<p><strong>Description:</strong><br> Month-over-month change rate refers to the percentage variation between the current month's measure value and the measure value for the specified month.</p>
<p><strong>Example:</strong><br> <code>[Measures].[Sales Quantity] / Sum(FilteredParallelPeriod([Time Dimension].[Time Hierarchy], -1, "m"), [Measures].[Sales Quantity]) - 1</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is for March 2023, the calculated value of the measure represents the percentage change in sales quantity between March 2023 and February 2023.</p>`,
        'zh-CN': `<p><strong>描述：</strong><br> 月份同比变化率是指当前月份的度量值与指定月份的度量值之间的百分比变化。</p>
<p><strong>示例：</strong><br> <code>[Measures].[销售数量] / Sum(FilteredParallelPeriod([时间维度].[时间层次], -1, "m"), [Measures].[销售数量]) -1</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年3月份，计算度量的值是2023年3月份的销售数量汇总值和2023年2月份的销售数量的百分比变化。</p>`,
        'zh-TW': `<p><strong>描述：</strong><br> 月份同比变化率是指当前月份的度量值与指定月份的度量值之间的百分比变化。</p>
<p><strong>示例：</strong><br> <code>[Measures].[销售数量] / Sum(FilteredParallelPeriod([时间维度].[时间层次], -1, "m"), [Measures].[销售数量]) -1</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年3月份，计算度量的值是2023年3月份的销售数量汇总值和2023年2月份的销售数量的百分比变化。</p>`,
        'zh': `<p><strong>描述：</strong><br> 月份同比变化率是指当前月份的度量值与指定月份的度量值之间的百分比变化。</p>
<p><strong>示例：</strong><br> <code>[Measures].[销售数量] / Sum(FilteredParallelPeriod([时间维度].[时间层次], -1, "m"), [Measures].[销售数量]) -1</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年3月份，计算度量的值是2023年3月份的销售数量汇总值和2023年2月份的销售数量的百分比变化。</p>`,
        'en-US': `<p><strong>Description:</strong><br> Month-over-month change rate refers to the percentage variation between the current month's measure value and the measure value for the specified month.</p>
<p><strong>Example:</strong><br> <code>[Measures].[Sales Quantity] / Sum(FilteredParallelPeriod([Time Dimension].[Time Hierarchy], -1, "m"), [Measures].[Sales Quantity]) - 1</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is for March 2023, the calculated value of the measure represents the percentage change in sales quantity between March 2023 and February 2023.</p>`,
      },
      template: `(
        {{measure}}
        /
        Sum(
          FilteredParallelPeriod({{hierarchy}},{{count}},"m"), 
          {{measure}}
        )
        -1       
      )`,
      params: [
        {
          name: 'hierarchy',
          title: {
            'en': 'Time hierarchy',
            'zh-CN': '时间层次',
            'zh-TW': '时间层次',
            'zh': '时间层次',
            'en-US': 'Time hierarchy',
          },
          desc: {
            'en': 'Time hierarchy',
            'zh-CN': '时间层次',
            'zh-TW': '时间层次',
            'zh': '时间层次',
            'en-US': 'Time hierarchy',
          },
          type: 'TimeHierarchySelector',
        },
        {
          name: 'measure',
          title: {
            'en': 'Measure',
            'zh-CN': '度量',
            'zh-TW': '度量',
            'zh': '度量',
            'en-US': 'Measure',
          },
          desc: {
            'en': 'Measure',
            'zh-CN': '度量',
            'zh-TW': '度量',
            'zh': '度量',
            'en-US': 'Measure',
          },
          type: 'MeasureSelector',
        },
        {
          name: 'count',
          title: {
            'en': 'Number of periods',
            'zh-CN': '周期个数',
            'zh-TW': '週期個數',
            'zh': '周期个数',
            'en-US': 'Number of periods',
          },
          desc: {
            'en': 'The number of past months over which to calculate the value',
            'zh-CN': '计算该值所需的过去的月份数量',
            'zh-TW': '计算该值所需的过去的月份数量',
            'zh': '计算该值所需的过去的月份数量',
            'en-US': 'The number of past months over which to calculate the value',
          },
          type: 'ReverseNumericInput',
          init: 1
        }
      ],
    },
    {
      key: 'week-over-week',
      title: {
        'en': 'Week-over-week change rate',
        'zh-CN': '周同比变化率',
        'zh-TW': '周同比变化率',
        'zh': '周同比变化率',
        'en-US': 'Week-over-week change rate',
      },
      desc: {
        'en': `<p><strong>Description:</strong><br> Week-over-week change rate refers to the percentage variation between the current month's measure value and the measure value for the specified week.</p>
<p><strong>Example:</strong><br> <code>[Measures].[Sales Quantity] / Sum(FilteredParallelPeriod([Time Dimension].[Time Hierarchy], -1, "ww"), [Measures].[Sales Quantity]) - 1</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is for the 3rd week of 2023, the calculated value of the measure represents the percentage change in sales quantity between the 3rd week of March 2023 and the 2nd week of 2023.</p>`,
        'zh-CN': `<p><strong>描述：</strong><br> 周同比变化率是指当前月份的度量值与指定周的度量值之间的百分比变化。</p>
<p><strong>示例：</strong><br> <code>[Measures].[销售数量] / Sum(FilteredParallelPeriod([时间维度].[时间层次], -1, "ww"), [Measures].[销售数量]) -1</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年第3周，计算度量的值是2023年3月份的销售数量汇总值和2023年第2周的销售数量的百分比变化。</p>`,
        'zh-TW': `<p><strong>描述：</strong><br> 周同比变化率是指当前月份的度量值与指定周的度量值之间的百分比变化。</p>
<p><strong>示例：</strong><br> <code>[Measures].[销售数量] / Sum(FilteredParallelPeriod([时间维度].[时间层次], -1, "ww"), [Measures].[销售数量]) -1</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年第3周，计算度量的值是2023年3月份的销售数量汇总值和2023年第2周的销售数量的百分比变化。</p>`,
        'zh': `<p><strong>描述：</strong><br> 周同比变化率是指当前月份的度量值与指定周的度量值之间的百分比变化。</p>
<p><strong>示例：</strong><br> <code>[Measures].[销售数量] / Sum(FilteredParallelPeriod([时间维度].[时间层次], -1, "ww"), [Measures].[销售数量]) -1</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年第3周，计算度量的值是2023年3月份的销售数量汇总值和2023年第2周的销售数量的百分比变化。</p>`,
        'en-US': `<p><strong>Description:</strong><br> Week-over-week change rate refers to the percentage variation between the current month's measure value and the measure value for the specified week.</p>
<p><strong>Example:</strong><br> <code>[Measures].[Sales Quantity] / Sum(FilteredParallelPeriod([Time Dimension].[Time Hierarchy], -1, "ww"), [Measures].[Sales Quantity]) - 1</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is for the 3rd week of 2023, the calculated value of the measure represents the percentage change in sales quantity between the 3rd week of March 2023 and the 2nd week of 2023.</p>`,
      },
      template: `(
        {{measure}}
        /
        Sum(
          FilteredParallelPeriod({{hierarchy}},{{count}},"ww"), 
          {{measure}}
        )
        -1       
      )`,
      params: [
        {
          name: 'hierarchy',
          title: {
            'en': 'Time hierarchy',
            'zh-CN': '时间层次',
            'zh-TW': '时间层次',
            'zh': '时间层次',
            'en-US': 'Time hierarchy',
          },
          desc: {
            'en': 'Time hierarchy',
            'zh-CN': '时间层次',
            'zh-TW': '时间层次',
            'zh': '时间层次',
            'en-US': 'Time hierarchy',
          },
          type: 'TimeHierarchySelector',
        },
        {
          name: 'measure',
          title: {
            'en': 'Measure',
            'zh-CN': '度量',
            'zh-TW': '度量',
            'zh': '度量',
            'en-US': 'Measure',
          },
          desc: {
            'en': 'Measure',
            'zh-CN': '度量',
            'zh-TW': '度量',
            'zh': '度量',
            'en-US': 'Measure',
          },
          type: 'MeasureSelector',
        },
        {
          name: 'count',
          title: {
            'en': 'Number of periods',
            'zh-CN': '周期个数',
            'zh-TW': '週期個數',
            'zh': '周期个数',
            'en-US': 'Number of periods',
          },
          desc: {
            'en': 'The number of past weeks over which to calculate the value',
            'zh-CN': '计算该值所需的过去的周数量',
            'zh-TW': '计算该值所需的过去的周数量',
            'zh': '计算该值所需的过去的周数量',
            'en-US': 'The number of past weeks over which to calculate the value',
          },
          type: 'ReverseNumericInput',
          init: 1
        }
      ],
    },
    {
      key: 'chain-relative-ratio',
      title: {
        'en': 'Period-over-period change rate',
        'zh-CN': '环比变化率',
        'zh-TW': '环比变化率',
        'zh': '环比变化率',
        'en-US': 'Period-over-period change rate',
      },
      desc: {
        'en': `<p><strong>Description:</strong><br> Month-over-month change rate refers to the percentage variation between the specified measures over consecutive periods.</p>
<p><strong>Example:</strong><br> <code>[Measures].[Sales Quantity] / Sum(FilteredLoopPeriod([Time Dimension].[Time Hierarchy], -1), [Measures].[Sales Quantity]) - 1</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is from May 2023 to July 2023, the calculated value of the measure represents the percentage change rate between the total sales quantity for May to July 2023 and the total sales quantity for February to April 2023.</p>`,
        'zh-CN': `<p><strong>描述：</strong><br> 环比变化率是指相邻期间内的指定度量之间的百分比变化率。</p>
<p><strong>示例：</strong><br> <code>[Measures].[Sales Quantity] / Sum(FilteredLoopPeriod([时间维度].[时间层次], -1),[Measures].[销售数量]]) -1</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年5月到2023年7月，计算度量的值是2023年5月到2023年7月的销售数量汇总值和2023年2月到2023年4月的销售数量汇总值之间的百分比变化率。</p>`,
        'zh-TW': `<p><strong>描述：</strong><br> 环比变化率是指相邻期间内的指定度量之间的百分比变化率。</p>
<p><strong>示例：</strong><br> <code>[Measures].[Sales Quantity] / Sum(FilteredLoopPeriod([时间维度].[时间层次], -1),[Measures].[销售数量]]) -1</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年5月到2023年7月，计算度量的值是2023年5月到2023年7月的销售数量汇总值和2023年2月到2023年4月的销售数量汇总值之间的百分比变化率。</p>`,
        'zh': `<p><strong>描述：</strong><br> 环比变化率是指相邻期间内的指定度量之间的百分比变化率。</p>
<p><strong>示例：</strong><br> <code>[Measures].[Sales Quantity] / Sum(FilteredLoopPeriod([时间维度].[时间层次], -1),[Measures].[销售数量]]) -1</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年5月到2023年7月，计算度量的值是2023年5月到2023年7月的销售数量汇总值和2023年2月到2023年4月的销售数量汇总值之间的百分比变化率。</p>`,
        'en-US': `<p><strong>Description:</strong><br> Month-over-month change rate refers to the percentage variation between the specified measures over consecutive periods.</p>
<p><strong>Example:</strong><br> <code>[Measures].[Sales Quantity] / Sum(FilteredLoopPeriod([Time Dimension].[Time Hierarchy], -1), [Measures].[Sales Quantity]) - 1</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is from May 2023 to July 2023, the calculated value of the measure represents the percentage change rate between the total sales quantity for May to July 2023 and the total sales quantity for February to April 2023.</p>`,
      },
      template: `(
        {{measure}}
        /
        Sum(
          FilteredLoopPeriod({{hierarchy}},{{count}}), 
          {{measure}}
        )
        -1       
      )`,
      params: [
        {
          name: 'hierarchy',
          title: {
            'en': 'Time hierarchy',
            'zh-CN': '时间层次',
            'zh-TW': '时间层次',
            'zh': '时间层次',
            'en-US': 'Time hierarchy',
          },
          desc: {
            'en': 'Time hierarchy used for comparison',
            'zh-CN': '比较所用的时间层次',
            'zh-TW': '比较所用的时间层次',
            'zh': '比较所用的时间层次',
            'en-US': 'Time hierarchy used for comparison',
          },
          type: 'TimeHierarchySelector',
        },
        {
          name: 'measure',
          title: {
            'en': 'Measure',
            'zh-CN': '度量',
            'zh-TW': '度量',
            'zh': '度量',
            'en-US': 'Measure',
          },
          desc: {
            'en': 'Measure to be calculated',
            'zh-CN': '所要计算的度量',
            'zh-TW': '所要计算的度量',
            'zh': '所要计算的度量',
            'en-US': 'Measure to be calculated',
          },
          type: 'MeasureSelector',
        },
        {
          name: 'count',
          title: {
            'en': 'Number of periods',
            'zh-CN': '周期个数',
            'zh-TW': '週期個數',
            'zh': '周期个数',
            'en-US': 'Number of periods',
          },
          desc: {
            'en': 'The number of past periods over which to calculate the value',
            'zh-CN': '计算该值所需的过去的周期数量',
            'zh-TW': '计算该值所需的过去的周期数量',
            'zh': '计算该值所需的过去的周期数量',
            'en-US': 'The number of past periods over which to calculate the value',
          },
          type: 'ReverseNumericInput',
          init: 1
        }
      ],
    }
    ],
  },
  {
    key: 'Time-accumulation',
    title: {
      'en': 'Accumulated',
      'zh-CN': '累计',
      'zh-TW': '累计',
      'zh': '累计',
      'en-US': 'Accumulated',
    },
    children: [
      {
        key: 'year-to-date',
        title: {
          'en': 'YTD(Year-to-Date)',
          'zh-CN': '年累计(YTD)',
          'zh-TW': '年累计(YTD)',
          'zh': '年累计(YTD)',
          'en-US': 'YTD(Year-to-Date)',
        },
        desc: {
          'en': `<p><strong>Description:</strong><br> YTD refers to the cumulative sum of the measure from the beginning of the year to the current date.</p>
<p><strong>Example:</strong><br> <code>Sum(FilteredAccumulativePeriod([Time Dimension].[Time Hierarchy], "yyyy"), [Measures].[Sales Quantity])</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is May 10, 2023, the calculated value of the measure is the cumulative sum of sales quantity from January 1, 2023, to May 10, 2023.</p>`,
          'zh-CN': `<p><strong>描述：</strong><br> YTD是指计算从年初到当前日期的度量的汇总值。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredAccumulativePeriod([时间维度].[时间层次], "yyyy"),[Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年5月10日，计算度量的值是2023年1月1日到2023年5月10日的销售数量汇总值。</p>`,
          'zh-TW': `<p><strong>描述：</strong><br> YTD是指计算从年初到当前日期的度量的汇总值。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredAccumulativePeriod([时间维度].[时间层次], "yyyy"),[Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年5月10日，计算度量的值是2023年1月1日到2023年5月10日的销售数量汇总值。</p>`,
          'zh': `<p><strong>描述：</strong><br> YTD是指计算从年初到当前日期的度量的汇总值。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredAccumulativePeriod([时间维度].[时间层次], "yyyy"),[Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年5月10日，计算度量的值是2023年1月1日到2023年5月10日的销售数量汇总值。</p>`,
          'en-US': `<p><strong>Description:</strong><br> YTD refers to the cumulative sum of the measure from the beginning of the year to the current date.</p>
<p><strong>Example:</strong><br> <code>Sum(FilteredAccumulativePeriod([Time Dimension].[Time Hierarchy], "yyyy"), [Measures].[Sales Quantity])</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is May 10, 2023, the calculated value of the measure is the cumulative sum of sales quantity from January 1, 2023, to May 10, 2023.</p>`,
        },
        template: `Sum(
          FilteredAccumulativePeriod({{hierarchy}},"yyyy"),
          {{measure}})
        `,
        params: [
          {
            name: 'hierarchy',
            title: {
              'en': 'Time hierarchy',
              'zh-CN': '时间层次',
              'zh-TW': '时间层次',
              'zh': '时间层次',
              'en-US': 'Time hierarchy',
            },
            desc: {
              'en': 'Time hierarchy',
              'zh-CN': '时间层次',
              'zh-TW': '时间层次',
              'zh': '时间层次',
              'en-US': 'Time hierarchy',
            },
            type: 'TimeHierarchySelector',
          },
          {
            name: 'measure',
            title: {
              'en': 'Measure',
              'zh-CN': '度量',
              'zh-TW': '度量',
              'zh': '度量',
              'en-US': 'Measure',
            },
            desc: {
              'en': 'Measure',
              'zh-CN': '度量',
              'zh-TW': '度量',
              'zh': '度量',
              'en-US': 'Measure',
            },
            type: 'MeasureSelector',
          },
        ],
      },
      {
        key: 'quarter-to-date',
        title: {
          'en': 'QTD(Quarter-to-Date)',
          'zh-CN': '季度累计(QTD)',
          'zh-TW': '季度累计(QTD)',
          'zh': '季度累计(MTD)',
          'en-US': 'QTD(Quarter-to-Date)',
        },
        desc: {
          'en': `<p><strong>Description:</strong><br> QTD refers to the cumulative sum of the specified measure from the first day of the current quarter to the current date.</p>
<p><strong>Example:</strong><br> <code>Sum(FilteredAccumulativePeriod([Time Dimension].[Time Hierarchy], "q"), [Measures].[Sales Quantity])</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is May 10, 2023, the calculated value of the measure is the cumulative sum of sales quantity from April 1, 2023, to May 10, 2023.</p>`,
          'zh-CN': `<p><strong>描述：</strong><br> QTD是指计算从当前季度的第一天到当前日期的指定度量的汇总值。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredAccumulativePeriod([时间维度].[时间层次], "q"),[Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年5月10日，计算度量的值是2023年4月1日到2023年5月10日的销售数量汇总值。</p>`,
          'zh-TW': `<p><strong>描述：</strong><br> QTD是指计算从当前季度的第一天到当前日期的指定度量的汇总值。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredAccumulativePeriod([时间维度].[时间层次], "q"),[Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年5月10日，计算度量的值是2023年4月1日到2023年5月10日的销售数量汇总值。</p>`,
          'zh': `<p><strong>描述：</strong><br> QTD是指计算从当前季度的第一天到当前日期的指定度量的汇总值。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredAccumulativePeriod([时间维度].[时间层次], "q"),[Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年5月10日，计算度量的值是2023年4月1日到2023年5月10日的销售数量汇总值。</p>`,
          'en-US': `<p><strong>Description:</strong><br> QTD refers to the cumulative sum of the specified measure from the first day of the current quarter to the current date.</p>
<p><strong>Example:</strong><br> <code>Sum(FilteredAccumulativePeriod([Time Dimension].[Time Hierarchy], "q"), [Measures].[Sales Quantity])</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is May 10, 2023, the calculated value of the measure is the cumulative sum of sales quantity from April 1, 2023, to May 10, 2023.</p>`,
        },
        template: `Sum(
          FilteredAccumulativePeriod({{hierarchy}},"q"),
          {{measure}}
        )`,
        params: [
          {
            name: 'hierarchy',
            title: {
              'en': 'Time hierarchy',
              'zh-CN': '时间层次',
              'zh-TW': '时间层次',
              'zh': '时间层次',
              'en-US': 'Time hierarchy',
            },
            desc: {
              'en': 'Time hierarchy',
              'zh-CN': '时间层次',
              'zh-TW': '时间层次',
              'zh': '时间层次',
              'en-US': 'Time hierarchy',
            },
            type: 'TimeHierarchySelector',
          },
          {
            name: 'measure',
            title: {
              'en': 'Measure',
              'zh-CN': '度量',
              'zh-TW': '度量',
              'zh': '度量',
              'en-US': 'Measure',
            },
            desc: {
              'en': 'Measure',
              'zh-CN': '度量',
              'zh-TW': '度量',
              'zh': '度量',
              'en-US': 'Measure',
            },
            type: 'MeasureSelector',
          },
        ],
      },
      {
        key: 'month-to-date',
        title: {
          'en': 'MTD(Month-to-Date)',
          'zh-CN': '月累计(MTD)',
          'zh-TW': '月累计(MTD)',
          'zh': '月累计(MTD)',
          'en-US': 'MTD(Month-to-Date)',
        },
        desc: {
          'en': `<p><strong>Description:</strong><br> MTD refers to the cumulative sum of the specified measure from the first day of the current month to the current date.</p>
<p><strong>Example:</strong><br> <code>Sum(FilteredAccumulativePeriod([Time Dimension].[Time Hierarchy], "m"), [Measures].[Sales Quantity])</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is May 10, 2023, the calculated value of the measure is the cumulative sum of sales quantity from May 1, 2023, to May 10, 2023.</p>`,
          'zh-CN': `<p><strong>描述：</strong><br> MTD是指计算从当月的第一天到当前日期的指定度量的汇总值。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredAccumulativePeriod([时间维度].[时间层次], "q"),[Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年5月10日，计算度量的值是2023年5月1日到2023年5月10日的销售数量汇总值。</p>`,
          'zh-TW': `<p><strong>描述：</strong><br> MTD是指计算从当月的第一天到当前日期的指定度量的汇总值。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredAccumulativePeriod([时间维度].[时间层次], "q"),[Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年5月10日，计算度量的值是2023年5月1日到2023年5月10日的销售数量汇总值。</p>`,
          'zh': `<p><strong>描述：</strong><br> MTD是指计算从当月的第一天到当前日期的指定度量的汇总值。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredAccumulativePeriod([时间维度].[时间层次], "q"),[Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年5月10日，计算度量的值是2023年5月1日到2023年5月10日的销售数量汇总值。</p>`,
          'en-US': `<p><strong>Description:</strong><br> MTD refers to the cumulative sum of the specified measure from the first day of the current month to the current date.</p>
<p><strong>Example:</strong><br> <code>Sum(FilteredAccumulativePeriod([Time Dimension].[Time Hierarchy], "m"), [Measures].[Sales Quantity])</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is May 10, 2023, the calculated value of the measure is the cumulative sum of sales quantity from May 1, 2023, to May 10, 2023.</p>`,
        },
        template: `Sum(
          FilteredAccumulativePeriod({{hierarchy}},"m"),
          {{measure}}
        )`,
        params: [
          {
            name: 'hierarchy',
            title: {
              'en': 'Time hierarchy',
              'zh-CN': '时间层次',
              'zh-TW': '时间层次',
              'zh': '时间层次',
              'en-US': 'Time hierarchy',
            },
            desc: {
              'en': 'Time hierarchy',
              'zh-CN': '时间层次',
              'zh-TW': '时间层次',
              'zh': '时间层次',
              'en-US': 'Time hierarchy',
            },
            type: 'TimeHierarchySelector',
          },
          {
            name: 'measure',
            title: {
              'en': 'Measure',
              'zh-CN': '度量',
              'zh-TW': '度量',
              'zh': '度量',
              'en-US': 'Measure',
            },
            desc: {
              'en': 'Measure',
              'zh-CN': '度量',
              'zh-TW': '度量',
              'zh': '度量',
              'en-US': 'Measure',
            },
            type: 'MeasureSelector',
          },
        ],
      },
      {
        key: 'week-to-date',
        title: {
          'en': 'WTD(Week-to-Date)',
          'zh-CN': '周累计(WTD)',
          'zh-TW': '周累计(WTD)',
          'zh': '周累计(WTD)',
          'en-US': 'WTD(Week-to-Date)',
        },
        desc: {
          'en': `<p><strong>Description:</strong><br> WTD refers to the cumulative sum of the specified measure from the first day of the current week to the current date.</p>
<p><strong>Example:</strong><br> <code>Sum(FilteredAccumulativePeriod([Time Dimension].[Time Hierarchy], "ww"), [Measures].[Sales Quantity])</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is May 10, 2023, the calculated value of the measure is the cumulative sum of sales quantity from May 7, 2023, to May 10, 2023.</p>`,
          'zh-CN': `<p><strong>描述：</strong><br> WTD是指计算从当周的第一天到当前日期的指定度量的汇总值。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredAccumulativePeriod([时间维度].[时间层次], "ww"),[Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年5月10日，计算度量的值是2023年5月7日到2023年5月10日的销售数量汇总值。</p>`,
          'zh-TW': `<p><strong>描述：</strong><br> WTD是指计算从当周的第一天到当前日期的指定度量的汇总值。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredAccumulativePeriod([时间维度].[时间层次], "ww"),[Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年5月10日，计算度量的值是2023年5月7日到2023年5月10日的销售数量汇总值。</p>`,
          'zh': `<p><strong>描述：</strong><br> WTD是指计算从当周的第一天到当前日期的指定度量的汇总值。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredAccumulativePeriod([时间维度].[时间层次], "ww"),[Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 如果作用在此计算度量的时间筛选是2023年5月10日，计算度量的值是2023年5月7日到2023年5月10日的销售数量汇总值。</p>`,
          'en-US': `<p><strong>Description:</strong><br> WTD refers to the cumulative sum of the specified measure from the first day of the current week to the current date.</p>
<p><strong>Example:</strong><br> <code>Sum(FilteredAccumulativePeriod([Time Dimension].[Time Hierarchy], "ww"), [Measures].[Sales Quantity])</code></p>
<p><strong>Example Explanation:</strong><br> If the time filter applied to this calculation measure is May 10, 2023, the calculated value of the measure is the cumulative sum of sales quantity from May 7, 2023, to May 10, 2023.</p>`,
        },
        template: `Sum(
          FilteredAccumulativePeriod({{hierarchy}},"ww"),
          {{measure}}
        )`,
        params: [
          {
            name: 'hierarchy',
            title: {
              'en': 'Time hierarchy',
              'zh-CN': '时间层次',
              'zh-TW': '时间层次',
              'zh': '时间层次',
              'en-US': 'Time hierarchy',
            },
            desc: {
              'en': 'Time hierarchy',
              'zh-CN': '时间层次',
              'zh-TW': '时间层次',
              'zh': '时间层次',
              'en-US': 'Time hierarchy',
            },
            type: 'TimeHierarchySelector',
          },
          {
            name: 'measure',
            title: {
              'en': 'Measure',
              'zh-CN': '度量',
              'zh-TW': '度量',
              'zh': '度量',
              'en-US': 'Measure',
            },
            desc: {
              'en': 'Measure',
              'zh-CN': '度量',
              'zh-TW': '度量',
              'zh': '度量',
              'en-US': 'Measure',
            },
            type: 'MeasureSelector',
          },
        ],
      }
    ]
  },
  {
    key: 'peer-comparison',
    title: {
      'en': 'Aggregate per category',
      'zh-CN': '按类别汇总',
      'zh-TW': '按类别汇总',
      'zh': '按类别汇总',
      'en-US': 'Aggregate per category',
    },
    children: [
      {
        key: 'category-average-filtered',
        title: {
          'en': 'Average per category',
          'zh-CN': '按类别平均',
          'zh-TW': '按类别平均',
          'zh': '按类别平均',
          'en-US': 'Average per category',
        },
        desc: {
          'en': `<p><strong>Description:</strong><br> Calculate the average of the measure within the category.</p>
<p><strong>Example:</strong><br> <code>Avg(FilteredLevel([Product Dimension].[Product Hierarchy].[Product Line]), [Measures].[Sales Quantity])</code></p>
<p><strong>Example Explanation:</strong><br> Calculate the average sales quantity within the product line.</p>`,
          'zh-CN': `<p><strong>描述：</strong><br> 计算度量在类别内的平均值。</p>
<p><strong>示例：</strong><br> <code>Avg(FilteredLevel([产品维度].[产品层次].[产品线]), [Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 计算销售数量在产品线中的平均值。</p>`,
          'zh-TW': `<p><strong>描述：</strong><br> 计算度量在类别内的平均值。</p>
<p><strong>示例：</strong><br> <code>Avg(FilteredLevel([产品维度].[产品层次].[产品线]), [Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 计算销售数量在产品线中的平均值。</p>`,
          'zh': `<p><strong>描述：</strong><br> 计算度量在类别内的平均值。</p>
<p><strong>示例：</strong><br> <code>Avg(FilteredLevel([产品维度].[产品层次].[产品线]), [Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 计算销售数量在产品线中的平均值。</p>`,
          'en-US': `<p><strong>Description:</strong><br> Calculate the average of the measure within the category.</p>
<p><strong>Example:</strong><br> <code>Avg(FilteredLevel([Product Dimension].[Product Hierarchy].[Product Line]), [Measures].[Sales Quantity])</code></p>
<p><strong>Example Explanation:</strong><br> Calculate the average sales quantity within the product line.</p>`,
        },
        template: `Avg(FilteredLevel({{level}}),{{measure}})`,
        params: [
          {
            name: 'level', //['hierarchy', 'level'], //控件输出两个参数值
            title: {
              'en': 'Category',
              'zh-CN': '类别',
              'zh-TW': '類別',
              'zh': '类别',
              'en-US': 'Category',
            },
            desc: {
              'en': 'The category in which you want to calculate the average',
              'zh-CN': '计算平均值的类别',
              'zh-TW': '计算平均值的类别',
              'zh': '计算平均值的类别',
              'en-US': 'The category in which you want to calculate the average',
            },
            type: 'NormalLevelSelector',
          },
          {
            name: 'measure',
            title: {
              'en': 'Measure',
              'zh-CN': '度量',
              'zh-TW': '度量',
              'zh': '度量',
              'en-US': 'Measure',
            },
            desc: {
              'en': 'The measure value you want to average',
              'zh-CN': '计算平均值的度量值',
              'zh-TW': '计算平均值的度量值',
              'zh': '计算平均值的度量值',
              'en-US': 'The measure value you want to average',
            },
            type: 'MeasureSelector',
          },
        ],
      },
      {
        key: 'category-summary-filtered',
        title: {
          'en': 'Sum per category',
          'zh-CN': '类别汇总值',
          'zh-TW': '类别汇总值',
          'zh': '类别汇总值',
          'en-US': 'Sum per category',
        },
        desc: {
          'en': `<p><strong>Description:</strong><br>Calculate the sum of the measure value within the category(filters applied).</p>
<p><strong>Example:</strong><br> <code>Sum(FilteredLevel([Product Dimension].[Product Hierarchy].[Product Line]), [Measures].[Sales Quantity])</code></p>
<p><strong>Example Explanation:</strong><br> Calculate the sum of sales quantity within the product line.</p>`,
          'zh-CN': `<p><strong>描述：</strong><br> 计算度量在类别内的汇总值（已筛选）。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredLevel([产品维度].[产品层次].[产品线]), [Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 计算销售数量在产品线中的汇总值。</p>`,
          'zh-TW': `<p><strong>描述：</strong><br> 计算度量在类别内的汇总值（已筛选）。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredLevel([产品维度].[产品层次].[产品线]), [Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 计算销售数量在产品线中的汇总值。</p>`,
          'zh': `<p><strong>描述：</strong><br> 计算度量在类别内的汇总值（已筛选）。</p>
<p><strong>示例：</strong><br> <code>Sum(FilteredLevel([产品维度].[产品层次].[产品线]), [Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 计算销售数量在产品线中的汇总值。</p>`,
          'en-US': `<p><strong>Description:</strong><br>Calculate the sum of the measure value within the category(filters applied).</p>
<p><strong>Example:</strong><br> <code>Sum(FilteredLevel([Product Dimension].[Product Hierarchy].[Product Line]), [Measures].[Sales Quantity])</code></p>
<p><strong>Example Explanation:</strong><br> Calculate the sum of sales quantity within the product line.</p>`,
        },
        template: `Sum(FilteredLevel({{level}}),{{measure}})`,
        params: [
          {
            name: 'level', //['hierarchy', 'level'], //控件输出两个参数值
            title: {
              'en': 'Category',
              'zh-CN': '类别',
              'zh-TW': '類別',
              'zh': '类别',
              'en-US': 'Category',
            },
            desc: {
              'en': 'The category in which you want to calculate the sum',
              'zh-CN': '计算汇总值的类别',
              'zh-TW': '计算汇总值的类别',
              'zh': '计算汇总值的类别',
              'en-US': 'The category in which you want to calculate the sum',
            },
            type: 'NormalLevelSelector',
          },
          {
            name: 'measure',
            title: {
              'en': 'Measure',
              'zh-CN': '度量',
              'zh-TW': '度量',
              'zh': '度量',
              'en-US': 'Measure',
            },
            desc: {
              'en': 'The measure value you want to sum',
              'zh-CN': '计算汇总值的度量值',
              'zh-TW': '计算汇总值的度量值',
              'zh': '计算汇总值的度量值',
              'en-US': 'The measure value you want to sum',
            },
            type: 'MeasureSelector',
          },
        ],
      },
      {
        key: 'category-max-filtered',
        title: {
          'en': 'Max per category',
          'zh-CN': '类别中的最大值',
          'zh-TW': '类别中的最大值',
          'zh': '类别中的最大值',
          'en-US': 'Max per category',
        },
        desc: {
          'en': `<p><strong>Description:</strong><br>Calculate the maximum of the measure value within the category(filters applied).</p>
<p><strong>Example:</strong><br> <code>Max(FilteredLevel([Product Dimension].[Product Hierarchy].[Product Line]), [Measures].[Sales Quantity])</code></p>
<p><strong>Example Explanation:</strong><br>Calculate the maximum value of sales quantity within the product line.</p>`,
          'zh-CN': `<p><strong>描述：</strong><br> 计算度量在类别内的最大值（已筛选）。</p>
<p><strong>示例：</strong><br> <code>Max(FilteredLevel([产品维度].[产品层次].[产品线]), [Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 计算销售数量在产品线中的最大值。</p>`,
          'zh-TW': `<p><strong>描述：</strong><br> 计算度量在类别内的最大值（已筛选）。</p>
<p><strong>示例：</strong><br> <code>Max(FilteredLevel([产品维度].[产品层次].[产品线]), [Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 计算销售数量在产品线中的最大值。</p>`,
          'zh': `<p><strong>描述：</strong><br> 计算度量在类别内的最大值（已筛选）。</p>
<p><strong>示例：</strong><br> <code>Max(FilteredLevel([产品维度].[产品层次].[产品线]), [Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 计算销售数量在产品线中的最大值。</p>`,
          'en-US': `<p><strong>Description:</strong><br>Calculate the maximum of the measure value within the category(filters applied).</p>
<p><strong>Example:</strong><br> <code>Max(FilteredLevel([Product Dimension].[Product Hierarchy].[Product Line]), [Measures].[Sales Quantity])</code></p>
<p><strong>Example Explanation:</strong><br>Calculate the maximum value of sales quantity within the product line.</p>`,
        },
        template: `Max(FilteredLevel({{level}}),{{measure}})`,
        params: [
          {
            name: 'level',
            title: {
              'en': 'Category',
              'zh-CN': '类别',
              'zh-TW': '類別',
              'zh': '类别',
              'en-US': 'Category',
            },
            desc: {
              'en': 'The category in which you want to calculate the maximum',
              'zh-CN': '计算最大值的类别',
              'zh-TW': '计算最大值的类别',
              'zh': '计算最大值的类别',
              'en-US': 'The category in which you want to calculate the maximum',
            },
            type: 'NormalLevelSelector',
          },
          {
            name: 'measure',
            title: {
              'en': 'Measure',
              'zh-CN': '度量',
              'zh-TW': '度量',
              'zh': '度量',
              'en-US': 'Measure',
            },
            desc: {
              'en': 'The measure whose maximum you want',
              'zh-CN': '计算最大值的度量值',
              'zh-TW': '计算最大值的度量值',
              'zh': '计算最大值的度量值',
              'en-US': 'The measure whose maximum you want',
            },
            type: 'MeasureSelector',
          },
        ],
      },
      {
        key: 'category-min-filtered',
        title: {
          'en': 'Min per category',
          'zh-CN': '类别中的最小值',
          'zh-TW': '类别中的最小值',
          'zh': '类别中的最小值',
          'en-US': 'Min per category',
        },
        desc: {
          'en': `<p><strong>Description:</strong><br>Calculate the minimum of the measure value within the category(filters applied).</p>
<p><strong>Example:</strong><br> <code>Min(FilteredLevel([Product Dimension].[Product Hierarchy].[Product Line]), [Measures].[Sales Quantity])</code></p>
<p><strong>Example Explanation:</strong><br>Calculate the minimum value of sales quantity within the product line.</p>`,
          'zh-CN': `<p><strong>描述：</strong><br> 计算度量在类别内的最小值（已筛选）。</p>
<p><strong>示例：</strong><br> <code>Min(FilteredLevel([产品维度].[产品层次].[产品线]), [Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 计算销售数量在产品线中的最小值。</p>`,
          'zh-TW': `<p><strong>描述：</strong><br> 计算度量在类别内的最小值（已筛选）。</p>
<p><strong>示例：</strong><br> <code>Min(FilteredLevel([产品维度].[产品层次].[产品线]), [Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 计算销售数量在产品线中的最小值。</p>`,
          'zh': `<p><strong>描述：</strong><br> 计算度量在类别内的最小值（已筛选）。</p>
<p><strong>示例：</strong><br> <code>Min(FilteredLevel([产品维度].[产品层次].[产品线]), [Measures].[销售数量])</code></p>
<p><strong>示例说明：</strong><br> 计算销售数量在产品线中的最小值。</p>`,
          'en-US': `<p><strong>Description:</strong><br>Calculate the minimum of the measure value within the category(filters applied).</p>
<p><strong>Example:</strong><br> <code>Min(FilteredLevel([Product Dimension].[Product Hierarchy].[Product Line]), [Measures].[Sales Quantity])</code></p>
<p><strong>Example Explanation:</strong><br>Calculate the minimum value of sales quantity within the product line.</p>`,
        },
        template: `Min(FilteredLevel({{level}}),{{measure}})`,
        params: [
          {
            name: 'level',
            title: {
              'en': 'Category',
              'zh-CN': '类别',
              'zh-TW': '類別',
              'zh': '类别',
              'en-US': 'Category',
            },
            desc: {
              'en': 'The category in which you want to calculate the minimum',
              'zh-CN': '计算最小值的类别',
              'zh-TW': '计算最小值的类别',
              'zh': '计算最小值的类别',
              'en-US': 'The category in which you want to calculate the minimum',
            },
            type: 'NormalLevelSelector',
          },
          {
            name: 'measure',
            title: {
              'en': 'Measure',
              'zh-CN': '度量',
              'zh-TW': '度量',
              'zh': '度量',
              'en-US': 'Measure',
            },
            desc: {
              'en': 'The measure whose minimum you want',
              'zh-CN': '计算最小值的度量值',
              'zh-TW': '计算最小值的度量值',
              'zh': '计算最小值的度量值',
              'en-US': 'The measure whose minimum you want',
            },
            type: 'MeasureSelector',
          },
        ],
      },
      {
        key: 'category-correlation-filtered',
        title: {
          'en': 'Category correlation',
          'zh-CN': '类别相关性',
          'zh-TW': '類別相關性',
          'zh': '类别相关性已筛选',
          'en-US': 'Category correlation',
        },
        desc: {
          'en': 'Category correlation(filters applied)',
          'zh-CN': '类别相关性（已筛选）',
          'zh-TW': '類別相關性（已筛选）',
          'zh': '类别相关性（已筛选）',
          'en-US': 'Category correlation(filters applied)',
        },
        template: `Correlation(FilteredLevel({{level}}), {{measureX}}, {{measureY}})`,
        params: [
          {
            name: 'level',
            title: {
              'en': 'Category',
              'zh-CN': '类别',
              'zh-TW': '类别',
              'zh': '类别',
              'en-US': 'Category',
            },
            desc: {
              'en': 'Category',
              'zh-CN': '类别',
              'zh-TW': '类别',
              'zh': '类别',
              'en-US': 'Category',
            },
            type: 'NormalLevelSelector',
          },
          {
            name: 'measureX',
            title: {
              'en': 'X-axis',
              'zh-CN': 'X轴',
              'zh-TW': 'X軸',
              'zh': 'X軸',
              'en-US': 'X-axis',
            },
            desc: {
              'en': 'X-axis',
              'zh-CN': 'X軸',
              'zh-TW': 'X軸',
              'zh': 'X軸',
              'en-US': 'X-axis',
            },
            type: 'MeasureSelector',
          },
          {
            name: 'measureY',
            title: {
              'en': 'Y-axis',
              'zh-CN': 'Y轴',
              'zh-TW': 'Y軸',
              'zh': 'Y軸',
              'en-US': 'Y-axis',
            },
            desc: {
              'en': 'Y-axis',
              'zh-CN': 'Y軸',
              'zh-TW': 'Y軸',
              'zh': 'Y軸',
              'en-US': 'Y-axis',
            },
            type: 'MeasureSelector',
          },
        ],
      },
      {
        key: 'category-overall-covariance-filtered',
        title: {
          'en': 'Overall covariance',
          'zh-CN': '类别总体协方差',
          'zh-TW': '類別總體協方差',
          'zh': '类别总体协方差',
          'en-US': 'Overall covariance',
        },
        desc: {
          'en': 'Overall covariance filtered(filters applied).',
          'zh-CN': '类别总体协方差（已筛选）',
          'zh-TW': '类别总体协方差（已筛选）',
          'zh': '类别总体协方差（已筛选）',
          'en-US': 'Overall covariance filtered(filters applied).',
        },
        template: `Covariance(FilteredLevel({{level}}),{{measureX}}, {{measureY}})`,
        params: [
          {
            name: 'level',
            title: {
              'en': 'Category',
              'zh-CN': '类别',
              'zh-TW': '類別',
              'zh': '类别',
              'en-US': 'Category',
            },
            desc: {
              'en': 'Category',
              'zh-CN': '类别',
              'zh-TW': '类别',
              'zh': '类别',
              'en-US': 'Category',
            },
            type: 'NormalLevelSelector',
          },
          {
            name: 'measureX',
            title: {
              'en': 'X-axis',
              'zh-CN': 'X轴',
              'zh-TW': 'X軸',
              'zh': 'X軸',
              'en-US': 'X-axis',
            },
            desc: {
              'en': 'X-axis',
              'zh-CN': 'X軸',
              'zh-TW': 'X軸',
              'zh': 'X軸',
              'en-US': 'X-axis',
            },
            type: 'MeasureSelector',
          },
          {
            name: 'measureY',
            title: {
              'en': 'Y-axis',
              'zh-CN': 'Y轴',
              'zh-TW': 'Y軸',
              'zh': 'Y軸',
              'en-US': 'Y-axis',
            },
            desc: {
              'en': 'Y-axis',
              'zh-CN': 'Y軸',
              'zh-TW': 'Y軸',
              'zh': 'Y軸',
              'en-US': 'Y-axis',
            },
            type: 'MeasureSelector',
          },
        ],
      },
      {
        key: 'category-sample-covariance-filtered',
        title: {
          'en': 'Sample covariance',
          'zh-CN': '类别样本协方差',
          'zh-TW': '類別樣本協方差',
          'zh': '类别样本协方差',
          'en-US': 'Sample covariance',
        },
        desc: {
          'en': 'Sample covariance(filters applied).',
          'zh-CN': '类别样本协方差（已筛选）',
          'zh-TW': '类别样本协方差（已筛选）',
          'zh': '类别样本协方差（已筛选）',
          'en-US': 'Sample covariance(filters applied).',
        },
        template: `CovarianceN(FilteredLevel({{level}}),{{measureX}}, {{measureY}})`,
        params: [
          {
            name: 'level',
            title: {
              'en': 'Category',
              'zh-CN': '类别',
              'zh-TW': '類別',
              'zh': '类别',
              'en-US': 'Category',
            },
            desc: {
              'en': 'Category',
              'zh-CN': '类别',
              'zh-TW': '类别',
              'zh': '类别',
              'en-US': 'Category',
            },
            type: 'NormalLevelSelector',
          },
          {
            name: 'measureX',
            title: {
              'en': 'X-axis',
              'zh-CN': 'X轴',
              'zh-TW': 'X軸',
              'zh': 'X軸',
              'en-US': 'X-axis',
            },
            desc: {
              'en': 'X-axis',
              'zh-CN': 'X軸',
              'zh-TW': 'X軸',
              'zh': 'X軸',
              'en-US': 'X-axis',
            },
            type: 'MeasureSelector',
          },
          {
            name: 'measureY',
            title: {
              'en': 'Y-axis',
              'zh-CN': 'Y轴',
              'zh-TW': 'Y軸',
              'zh': 'Y軸',
              'en-US': 'Y-axis',
            },
            desc: {
              'en': 'Y-axis',
              'zh-CN': 'Y軸',
              'zh-TW': 'Y軸',
              'zh': 'Y軸',
              'en-US': 'Y-axis',
            },
            type: 'MeasureSelector',
          },
        ],
      }
    ]
  },
]));